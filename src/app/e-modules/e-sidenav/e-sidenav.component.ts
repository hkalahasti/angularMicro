
import { Component, Injectable, ChangeDetectorRef, ViewChild, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd ,ActivatedRoute} from '@angular/router';
import { MatSidenav } from '@angular/material';

/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
*/
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
  constructor(
    public expandable: boolean, public filename: string, public level: number, public type: any) { }
}

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
const TREE_DATA = JSON.stringify({
  BasicComponents: {
    'accordian': 'accordian',
    
    'breadcrumb': 'breadcrumb',
    'calender' : 'calender',
    'notification': 'notification',
    'map': 'map',
    'video': 'video',
    'dropdown': 'dropdown',
    'datepicker': 'datepicker',
    'timepicker': 'timepicker',
    'menu': 'menu',
    'tabs': 'tabs',
    'spinner': 'spinner',
    'progressbar': 'progressbar',
    'switch': 'switch',
    'toast': 'toast',
    'carousel': 'carousel',
    'sliders': 'sliders',
    'dualslider': 'dualslider',
    'messagebox': 'messagebox',
    'dialog': 'dialog',
    'tooltip': 'tooltip',
    'navigation': 'navigation',
    'autocomplete': 'autocomplete',
  }
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);
    console.log(data);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }
      return accumulator.concat(node);
    }, []);
  }
}

/** @title Responsive sidenav */
@Component({
  selector: 'e-sidenav',
  templateUrl: './e-sidenav.component.html',
  styleUrls: ['./e-sidenav.component.scss'],
  providers: [FileDatabase]
})
export class ESideNavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  searchInput: string = "";

  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  showMenu = true;
  menuDataBackup: FileNode[] = JSON.parse(TREE_DATA);
  @ViewChild('tree') tree;
  private _mobileQueryListener: () => void;

  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
  activeUrl:any;
  constructor(
    private database: FileDatabase,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.database.dataChange.subscribe(data => this.dataSource.data = data);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this._ActivatedRoute.url.subscribe(() => {
      console.log(this._ActivatedRoute.snapshot.children);
      this.router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
            this.activeUrl = event.url.replace('/', '');
            console.log(this.activeUrl)
        }
      })
    });
  }
  ngOnInit() {
    if (window.innerWidth < 768) {
      this.navMode = 'over';
      console.log(this.navMode)
    }
  }
  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      console.log(event)
      this.navMode = 'over';
      if (this.sidenav) {
        this.sidenav.close();
      }

    }
    if (event.target.innerWidth > 768) {
      this.navMode = 'side';
      if (this.sidenav) {
        this.sidenav.open();
      }

    }
  }
  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type);
  }

  private _getLevel = (node: FileFlatNode) => node.level;

  private _isExpandable = (node: FileFlatNode) => node.expandable;

  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

  onMenuClick(node) {
    this.router.navigate([`${node.filename}`])
  }

  onSearch(value) {
    let self = this;
    this.searchInput;
    debugger
    function filterMenu(data) {
      Object.keys(data).forEach(key => {
        debugger
        if (typeof data[key] === "object") {
          filterMenu(data[key])
        } else {
          if (!key.includes(self.searchInput)) {
            // remove
            delete data[key];
          }
        }
      });
    }
    debugger
    let data = JSON.parse(JSON.stringify(this.menuDataBackup));
    if (this.searchInput !== "")
      filterMenu(data);
    data = this.database.buildFileTree(data, 0);
    this.database.dataChange.next(data);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

