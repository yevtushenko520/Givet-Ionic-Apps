webpackJsonp([49],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wish_list_wish_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_lists_my_lists__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, databaseProvider, http) {
        this.navCtrl = navCtrl;
        this.databaseProvider = databaseProvider;
        this.http = http;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__wish_list_wish_list__["a" /* WishListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__my_lists_my_lists__["a" /* MyListsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__groups_groups__["a" /* GroupsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__["a" /* MyProfilePage */];
        this.dev = [];
        this.valueforngif = true;
        this.wishlist_lang = 'anything';
        this.list_lang = 'anything';
        this.group_lang = 'anything';
        this.event_lang = 'anything';
        this.profile_lang = 'anything';
        this.loadDB();
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        window.addEventListener('keyboardWillShow', this.showListener);
        window.addEventListener('keyboardDidHide', this.hideListener);
        if (localStorage.getItem('token') === null)
            this.navCtrl.setRoot("LoginPage");
        // remove the event listener when something goes wrong in your token or session
        // }
    };
    TabsPage.prototype.ionViewWillLeave = function () {
        window.removeEventListener('keyboardWillShow', this.showListener);
        window.removeEventListener('keyboardDidHide', this.hideListener);
    };
    TabsPage.prototype.showListener = function () {
        console.log('keyboard visible');
        document.getElementById('TabBarOpen').classList.add('keyboard-is-open');
    };
    TabsPage.prototype.hideListener = function () {
        console.log('keyboard hides');
        document.getElementById('TabBarOpen').classList.remove('keyboard-is-open');
    };
    TabsPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.wishlist_lang = data['wishlist'];
                _this.list_lang = data['list'];
                _this.group_lang = data['groups'];
                _this.event_lang = data['event'];
                _this.profile_lang = data['profile_tab'];
            });
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\tabs\tabs.html"*/'<ion-tabs id="TabBarOpen">\n  \n  <ion-tab  [root]="tab1Root" tabTitle="{{wishlist_lang}}" tabIcon="bowtie"></ion-tab>\n\n\n  <ion-tab  [root]="tab2Root" tabTitle="{{list_lang}}" tabIcon="bookmarks"></ion-tab>\n\n\n  <ion-tab  [root]="tab3Root" tabTitle="{{group_lang}}" tabIcon="people"></ion-tab>\n\n\n  <ion-tab [root]="tab4Root" tabTitle="{{event_lang}}" tabIcon="calendar"></ion-tab>\n\n\n\n  <ion-tab  [root]="tab5Root" tabTitle="{{profile_lang}}" tabIcon="person"></ion-tab>\n\n\n</ion-tabs>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGiftprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserGiftprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserGiftprofilePage = /** @class */ (function () {
    function UserGiftprofilePage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.ids = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/gift_profile.php?user_id=" + this.ids;
        this.getData();
    }
    UserGiftprofilePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    UserGiftprofilePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.shoes = data['shoes'];
            _this.casual = data['casual'];
            _this.pants = data['pants'];
            _this.jackets = data['jackets'];
            _this.dress = data['dress'];
            _this.hat = data['hat'];
            _this.rand_1 = data['rand_1'];
            _this.rand_2 = data['rand_2'];
            _this.rand_3 = data['rand_3'];
            _this.rand_4 = data['rand_4'];
            _this.culture = data['culture'];
            _this.hobbies = data['hobbies'];
            _this.what_not = data['what_not'];
            _this.when_it = data['when_it'];
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    UserGiftprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-giftprofile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-giftprofile\user-giftprofile.html"*/'<!--\n  Generated template for the GiftProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gift Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-list >\n        <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label>\n              <p>Shoes</p>\n              <h2>{{shoes}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-icon name="ios-person" ></ion-icon>\n              <ion-label>\n                <p>Shirt</p>\n                <h2>{{shirt}}</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="ios-person" ></ion-icon>\n                <ion-label>\n                  <p>Pants</p>\n                  <h2>{{pants}}</h2>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                  <ion-icon name="ios-person" ></ion-icon>\n                  <ion-label>\n                    <p>Jackets</p>\n                    <h2>{{jackets}}</h2>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-person" ></ion-icon>\n                    <ion-label>\n                      <p>Dress</p>\n                      <h2>{{dress}}</h2>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item>\n                      <ion-icon name="ios-person" ></ion-icon>\n                      <ion-label>\n                        <p>Hat</p>\n                        <h2>{{hat}}</h2>\n                      </ion-label>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-icon name="ios-person" ></ion-icon>\n                        <ion-label>\n                          <p>Culture & Community</p>\n                          <h2>{{culture}}</h2>\n                        </ion-label>\n                      </ion-item>\n\n                      <ion-item>\n                          <ion-icon name="ios-person" ></ion-icon>\n                          <ion-label>\n                            <p>Hobbies and Interests</p>\n                            <h2>{{hobbies}}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        \n                      <ion-item>\n                          <ion-icon name="ios-person" ></ion-icon>\n                          <ion-label>\n                            <p>What not to get me</p>\n                            <h2>{{what_not}}</h2>\n                          </ion-label>\n                        </ion-item>\n\n\n                        <ion-grid>\n                            <ion-row>\n\n                                <ion-col>\n                        <ion-item>\n                            <ion-icon name="ios-person" ></ion-icon>\n                            <ion-label>\n                              <p>#1</p>\n                              <h2>{{rand_1}}</h2>\n                            </ion-label>\n                          </ion-item>\n\n\n                        </ion-col>\n\n                              <ion-col>\n                          \n                          <ion-item>\n                              <ion-icon name="ios-person" ></ion-icon>\n                              <ion-label>\n                                <p>#2</p>\n                                <h2>{{rand_2}}</h2>\n                              </ion-label>\n                            </ion-item>\n\n\n                          </ion-col>\n                          </ion-row>\n                        </ion-grid>\n\n\n                        <ion-grid>\n                            <ion-row>\n\n                                <ion-col>\n                            <ion-item>\n                                <ion-icon name="ios-person" ></ion-icon>\n                                <ion-label>\n                                  <p>#3</p>\n                                  <h2>{{rand_3}}</h2>\n                                </ion-label>\n                              </ion-item>\n                            </ion-col>\n\n                            <ion-col>\n                              <ion-item>\n                                  <ion-icon name="ios-person" ></ion-icon>\n                                  <ion-label>\n                                    <p>#4</p>\n                                    <h2>{{rand_4}}</h2>\n                                  </ion-label>\n                                </ion-item>\n                              </ion-col>\n </ion-row>\n                        </ion-grid>\n\n\n                        <ion-item>\n                            <ion-icon name="ios-person" ></ion-icon>\n                            <ion-label>\n                              <p>When it comes to me and gifts...</p>\n                              <h2>{{when_it}}</h2>\n                            </ion-label>\n                          </ion-item>\n                             \n    </ion-list >\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-giftprofile\user-giftprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], UserGiftprofilePage);
    return UserGiftprofilePage;
}());

//# sourceMappingURL=user-giftprofile.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserFriendsPage = /** @class */ (function () {
    function UserFriendsPage(navCtrl, modalCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.items = [];
        this.searchBar = false;
        this.dev = [];
        this.ids = navParams.get('id');
        this.loadDB();
    }
    UserFriendsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    UserFriendsPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.friends_eng = data['friend'];
            });
            _this.url = "http://api.givet.co.uk/api/my_friend.php?user_id=" + _this.ids;
            _this.getData();
        });
    };
    UserFriendsPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
        });
    };
    UserFriendsPage.prototype.openModal = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: item['id']
        });
    };
    UserFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-friends',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-friends\user-friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar> \n    <ion-title >{{friends_eng}}</ion-title>\n \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <ion-list >\n\n        <ion-col *ngFor="let item of items"  no-padding>\n\n        <ion-card (click)="openModal(item)">\n\n            <ion-item>\n              <ion-avatar item-start>\n\n                <img *ngIf="item.image != null && item.image.length > 0" src="https://givet.co.uk/backend/web/images/users/{{item.image}}"/>\n                <img *ngIf="item.image == null || item.image.length <= 0" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n\n              </ion-avatar>\n            \n              <h2>{{item.name}} {{item.surename}}</h2>\n              <p>{{item.email}}</p>\n             \n\n             \n              \n            </ion-item>\n           \n          \n\n            </ion-card>\n\n          </ion-col>\n    </ion-list >\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-friends\user-friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], UserFriendsPage);
    return UserFriendsPage;
}());

//# sourceMappingURL=user-friends.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_view_groups_view__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserGroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserGroupsPage = /** @class */ (function () {
    function UserGroupsPage(databaseProvider, navCtrl, navParams, http, loadingCtrl) {
        this.databaseProvider = databaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.group = [];
        this.searchBar = false;
        this.items_count = [];
        this.dev = [];
        this.ides = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/my_groups.php?user_id=" + this.ides;
        this.getData();
    }
    UserGroupsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    UserGroupsPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.group_lang = data['groups'];
            });
        });
    };
    UserGroupsPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_group.php?group_name=" + this.queryText + "&user_id=" + this.ides;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    UserGroupsPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/my_groups.php?user_id=" + this.ides;
        this.getData();
    };
    UserGroupsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.url = "http://api.givet.co.uk/api/my_groups.php?user_id=" + this.ides;
        this.getData();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    UserGroupsPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loadDB();
            // this.loading.dismiss();
        });
        //  this.loading.dismiss();
    };
    UserGroupsPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__groups_view_groups_view__["a" /* GroupsViewPage */], {
            id: item['id']
        });
    };
    UserGroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-groups',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-groups\user-groups.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!searchBar">{{group_lang}}</ion-title>\n   \n   \n    <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n    (ionInput)="updateText($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n      <ion-icon name="search"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingText="Pull to refresh..."\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n      \n  <ion-list>\n\n    \n      <ion-col *ngFor="let item of items"  no-padding>\n\n          <ion-card  *ngIf=" item.type == \'0\'" (click)="moToView(item)">\n\n              <ion-item>\n                  <ion-avatar item-start>\n\n                      <img *ngIf="item.image != null && item.image.length > 0" src="https://givet.co.uk/backend/web/images/{{item.image}}"/>\n                      <img *ngIf="item.image == null || item.image.length <= 0" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n                    </ion-avatar>\n\n                <h2>{{item.name}}</h2>\n                \n                                <span *ngIf=" item.type == \'0\'" class="label label-success">                  \n                                    Public</span> \n                    \n        \n              </ion-item>\n            \n            \n          \n              <ion-card-content>\n                <p [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') "></p>\n            \n              </ion-card-content>\n            \n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon name="md-people"></ion-icon>\n                    <div>{{item.count}}</div>\n                  </button>\n                </ion-col>\n               \n                \n              </ion-row>\n            \n            </ion-card>\n\n      </ion-col>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-groups\user-groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], UserGroupsPage);
    return UserGroupsPage;
}());

//# sourceMappingURL=user-groups.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups_update_groups_update__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_users_add_users__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the GroupsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsViewPage = /** @class */ (function () {
    function GroupsViewPage(navCtrl, navParams, modalCtrl, http, alertCtrl, loadingCtrl, databaseProvider, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.socialSharing = socialSharing;
        this.dev = [];
        this.devs = {};
        this.items_users = [];
        this.loginData = { title: '' };
        this.ids = navParams.get('id');
    }
    GroupsViewPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    GroupsViewPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/info_group.php?group_id=" + _this.ids;
            _this.getData();
        });
    };
    GroupsViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GroupsViewPage.prototype.share = function () {
        // Check if sharing via email is supported
        this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/group_page&id=" + this.ids).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    GroupsViewPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.name = data['name'];
            _this.loginData.title = data['name'];
            _this.description = data['description'];
            _this.image = data['image'];
            _this.type = data['type'];
            _this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id;
            _this.data_user = _this.http.get(_this.url_user);
            _this.data_user.subscribe(function (data_user) {
                _this.user_name = data_user['name'];
                _this.user_email = data_user['email'];
                _this.user_surename = data_user['surename'];
                _this.user_image = data_user['image'];
                var person = "http";
                var personRegExp = new RegExp(person);
                if (personRegExp.test(_this.user_image)) {
                    console.log(person + " is a philosopher.");
                    _this.test = '1';
                }
                else {
                    console.log(person + " is NOT a philosopher.");
                }
                _this.url_group = "http://api.givet.co.uk/api/user_in_group.php?group_id=" + _this.ids;
                _this.data_group = _this.http.get(_this.url_group);
                _this.data_group.subscribe(function (data_group) {
                    _this.url_check = "http://api.givet.co.uk/api/check_user_in_group.php?group_id=" + _this.ids + "&user_id=" + _this.user_id_2;
                    _this.data_check = _this.http.get(_this.url_check);
                    _this.data_check.subscribe(function (data_check) {
                        if (data_check['status'] == "200 OK") {
                            _this.user_in_group = '1';
                        }
                        else {
                            _this.user_in_group = '0';
                        }
                    });
                    _this.items_users = data_group;
                    _this.loading.dismiss();
                });
            });
        });
        // this.loading.dismiss();
    };
    GroupsViewPage.prototype.addUser = function () {
        var _this = this;
        var url = "http://api.givet.co.uk/api/send_user_in_group.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id_2);
        postData.append('group_id', this.ids);
        postData.append('add', '0');
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.presentLoadingDefault();
                _this.url = "http://api.givet.co.uk/api/info_group.php?group_id=" + _this.ids;
                _this.getData();
            }
            else {
                _this.presentError();
            }
            console.log(data);
        });
    };
    GroupsViewPage.prototype.leav = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you really want to leave the group?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        _this.del2();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    GroupsViewPage.prototype.del2 = function () {
        var _this = this;
        var url = "http://api.givet.co.uk/api/delete_user_froup.php";
        var postData = new FormData();
        postData.append('group_id', this.ids);
        postData.append('user_id', this.user_id_2);
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            _this.presentLoadingDefault();
            _this.url = "http://api.givet.co.uk/api/info_group.php?group_id=" + _this.ids;
            _this.getData();
        });
    };
    GroupsViewPage.prototype.del = function (item) {
        var _this = this;
        var url = "http://api.givet.co.uk/api/delete_user_froup.php";
        var postData = new FormData();
        postData.append('group_id', this.ids);
        postData.append('user_id', item['id']);
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            _this.loadDB();
        });
    };
    GroupsViewPage.prototype.moToCreate = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__groups_update_groups_update__["a" /* GroupsUpdatePage */], {
            id: id
        });
    };
    GroupsViewPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsViewPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete',
            message: 'Do you want to delete this group?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        var url = "http://api.givet.co.uk/api/delete_group.php";
                        var postData = new FormData();
                        postData.append('group_id', id);
                        _this.data = _this.http.post(url, postData);
                        _this.data.subscribe(function (data) {
                            if (data['group']['status'] == "OK") {
                                _this.navCtrl.pop();
                            }
                            else {
                                _this.navCtrl.pop();
                            }
                            console.log(data);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    GroupsViewPage.prototype.openModal = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: id
        });
    };
    GroupsViewPage.prototype.openModalFriend = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_users_add_users__["a" /* AddUsersPage */], {
            id: id,
        });
    };
    GroupsViewPage.prototype.openModalTwo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: id['id']
        });
    };
    GroupsViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-groups-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups-view\groups-view.html"*/'<!--\n  Generated template for the WishlistViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n    <ion-navbar>\n      <ion-title>{{ (loginData.title | slice:0:15) + (loginData.title.length > 15 ? \'...\' : \'\')}} </ion-title>\n  \n      <ion-buttons *ngIf=" user_id_2 == user_id"end>\n          <button ion-button icon-only (click)="moToCreate(ids)">\n            <ion-icon name="ios-create-outline"></ion-icon>\n          </button>\n  \n    \n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n  \n  \n      <ion-card>\n  \n          <ion-item>\n           \n            <h2>{{name}}</h2>\n            <span *ngIf=" type == \'1\'" class="label label-danger">                  \n              Private</span> \n\n                  <span *ngIf=" type == \'0\'" class="label label-success">                  \n                      Public</span> \n          </ion-item>\n\n          <img *ngIf="image != null" src="https://givet.co.uk/backend/web/images/{{image}}"/>\n          <img *ngIf="image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n          \n          <ion-item (click)="openModal(user_id)" *ngIf="user_email != \'admin@admin.com\'">\n            <ion-avatar item-start>\n          \n                <img *ngIf="user_image != null" src="https://givet.co.uk/backend/web/images/users/{{user_image}}"/>\n                <img *ngIf="user_image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n            </ion-avatar>\n            <h2>{{user_name}} {{user_surename}}</h2>\n            <p>{{user_email}}</p>\n          </ion-item>\n\n\n         \n        \n          <ion-card-content>\n            <p [innerHtml]="description"></p>\n          </ion-card-content>\n\n        \n        \n        <ion-item *ngIf="type == \'0\' && user_in_group ==\'0\' || user_id_2 == user_id && type != \'0\' && user_in_group ==\'0\'">\n          <button ion-button  color="secondary" (click)="addUser()">Go to Group</button>\n      </ion-item>\n    \n\n      <ion-item *ngIf="user_in_group !=\'0\' ">\n          <button   ion-button color="danger" (click)="leav()">Leave </button>\n        </ion-item>\n        \n\n          <ion-item *ngIf=" type == \'0\'">\n              <button ion-button (click)="share()">Share</button>\n          </ion-item>\n        \n        </ion-card>\n\n         <ion-list>\n\n          <ion-card>\n            <div class="item">\n             \n                <h2 style="    padding: 20px;" float-left>\n                    Users in Group </h2>\n               \n                <ion-buttons  *ngIf="user_id == user_id" style="    padding: 10px;" float-right>\n                    <button ion-button icon-only (click)="openModalFriend(ids)">\n                      <ion-icon name="add"></ion-icon>\n                    </button>\n                    \n                  </ion-buttons>\n              </div>\n\n        </ion-card>\n\n \n\n            \n          <ion-card>\n       <ion-col *ngFor="let item of items_users"  no-padding>\n\n        <ion-item \n      \n       \n\n        >\n          <ion-avatar item-start (click)="openModalTwo(item)">\n              <img class="goga" *ngIf=" test != null" src="{{item.image}}">\n              <img class="goga" *ngIf=" test == null && item.image != null" src="https://givet.co.uk/backend/web/images/users/{{item.image}}">\n\n          \n              <img *ngIf="test == null && item.image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n          </ion-avatar>\n          <h2 (click)="openModalTwo(item)">{{item.name}} {{item.surename}}</h2>\n          <p>{{item.email}}</p>\n\n          <button ion-button *ngIf=" user_id_2 == user_id && item.id !=user_id_2 " color="danger" (click)="del(item)">Delete</button>\n        </ion-item>\n\n          </ion-col>\n    \n          \n        </ion-card>\n\n        </ion-list>\n\n\n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups-view\groups-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], GroupsViewPage);
    return GroupsViewPage;
}());

//# sourceMappingURL=groups-view.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_view_groups_view__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_create_groups_create__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.items_count = [];
        this.group = [];
        this.searchBar = false;
    }
    GroupsPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    GroupsPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.group_lang = data['groups'];
                _this.create_new = data['create_new'];
            });
            _this.url = "http://api.givet.co.uk/api/my_groups.php?user_id=" + _this.user_id;
            _this.getData();
        });
    };
    GroupsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GroupsPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
        });
        // this.loading.dismiss();
    };
    GroupsPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url_search = "http://api.givet.co.uk/api/search_group.php?group_name=" + this.queryText + "&user_id=" + this.user_id;
            this.data = this.http.get(this.url_search);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    GroupsPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/my_groups.php?user_id=" + this.user_id;
        this.getData();
    };
    GroupsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.url = "http://api.givet.co.uk/api/my_groups.php?user_id=" + this.user_id;
        this.getData();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    GroupsPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__groups_view_groups_view__["a" /* GroupsViewPage */], {
            id: item['id']
        });
    };
    GroupsPage.prototype.moToCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__groups_create_groups_create__["a" /* GroupsCreatePage */]);
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups\groups.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!searchBar">{{group_lang}}</ion-title>\n \n    \n      <ion-buttons *ngIf="!searchBar" end style="margin-right: 3px;">\n          <button ion-button icon-only (click)="moToCreate()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n        (ionInput)="updateText($event)"></ion-searchbar>\n        <ion-buttons end>\n          <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        </ion-buttons>\n\n        \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  \n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n            pullingText="Pull to refresh..."\n            refreshingText="Refreshing...">\n          </ion-refresher-content>\n        </ion-refresher>\n        \n\n\n       \n    \n          <ion-list *ngIf="items == null" text-center>\n    \n        \n              <button *ngIf="items == null" (click)="moToCreate()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new}}</button>\n            </ion-list>\n\n      <ion-list *ngIf="items != null">\n  \n        \n\n\n        <ion-col *ngFor="let item of items"  no-padding>\n  \n            <ion-card (click)="moToView(item)">\n\n                <ion-item>\n                    <ion-avatar item-start>\n                     \n                        <img *ngIf="item.image != null" src="https://givet.co.uk/backend/web/images/{{item.image}}"/>\n                        <img *ngIf="item.image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n                      </ion-avatar>\n\n                  <h2>{{item.name}}</h2>\n                  \n                       \n\n                          <span *ngIf=" item.type == \'1\'" class="label label-danger">                  \n                              Private</span> \n    \n                                  <span *ngIf=" item.type == \'0\'" class="label label-success">                  \n                                      Public</span> \n                      \n          \n                </ion-item>\n              \n                \n            \n                <ion-card-content>\n\n                  \n                  <p [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') "></p>\n                </ion-card-content>\n              \n                <ion-row>\n                  <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="md-people"></ion-icon>\n                      <div>{{item.count}}</div>\n                    </button>\n                  </ion-col>\n                 \n                  \n                </ion-row>\n              \n              </ion-card>\n  \n        </ion-col>\n      \n    </ion-list>\n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups\groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_view_events_view__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserEventsPage = /** @class */ (function () {
    function UserEventsPage(databaseProvider, navCtrl, navParams, http, loadingCtrl) {
        this.databaseProvider = databaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.searchBar = false;
        this.dev = [];
        this.ides = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/my_events.php?user_id=" + this.ides;
        this.getData();
    }
    UserEventsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    UserEventsPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.events_lang = data['event'];
            });
        });
    };
    UserEventsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.url = "http://api.givet.co.uk/api/my_events.php?user_id=" + this.ides;
        this.getData();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    UserEventsPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_event.php?event_name=" + this.queryText + "&user_id=" + this.ides;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    UserEventsPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/my_events.php?user_id=" + this.ides;
        this.getData();
    };
    UserEventsPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
            _this.loadDB();
        });
        this.loading.dismiss();
    };
    UserEventsPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_view_events_view__["a" /* EventsViewPage */], {
            id: item['id']
        });
    };
    UserEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-events',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-events\user-events.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title *ngIf="!searchBar ">{{events_lang}}</ion-title>\n\n    \n    <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n    (ionInput)="updateText($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n      <ion-icon name="search"></ion-icon>\n    </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingText="Pull to refresh..."\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n\n  <ion-list>\n\n    \n      <ion-col *ngFor="let item of items"  no-padding>\n\n          <ion-card (click)="moToView(item)">\n\n              <ion-item>\n              \n                <h2>{{item.name}}</h2>\n                \n                <span *ngIf="item.repeat == \'0\'" class="label label-info">Weekly</span>\n                <span *ngIf="item.repeat == \'1\'" class="label label-info">Monthly</span> \n                <span *ngIf="item.repeat == \'2\'" class="label label-info">Yearly</span>\n                <span *ngIf="item.repeat == \'3\'" class="label label-info">One Time</span>\n              </ion-item>\n            \n             \n            \n              <ion-card-content>\n                  \n                  <p [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') "></p>\n              </ion-card-content>\n            \n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon name="ios-time-outline"></ion-icon>\n                    <div>{{item.time}}</div>\n                  </button>\n                </ion-col>\n\n                <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="md-calendar"></ion-icon>\n                      <div>{{item.date}}</div>\n                    </button>\n                  </ion-col>\n\n\n               \n                \n              </ion-row>\n            \n            </ion-card>\n\n      </ion-col>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-events\user-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], UserEventsPage);
    return UserEventsPage;
}());

//# sourceMappingURL=user-events.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_create_products_create__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SelectProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectProductPage = /** @class */ (function () {
    function SelectProductPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.items_dota = [];
        this.search = [];
        this.searchBar = false;
        this.res_user = navParams.get('res');
        this.status = navParams.get('status');
        if (this.status == 1) {
            this.other_id = navParams.get('wish_id');
        }
        else if (this.status == 2) {
            this.other_id = navParams.get('fav_id');
        }
        else {
            this.other_id = null;
        }
        this.loadDB();
    }
    SelectProductPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.select_prod_lang = data['select_prod'];
                _this.create_new_lang = data['create_new'];
                _this.add_lang = data['adds'];
            });
            if (_this.status == 1) {
                _this.url = "http://api.givet.co.uk/api/get_prod_wish.php?user_id=" + _this.user_id_2 + "&wish_id=" + _this.other_id;
                _this.getData();
            }
            else if (_this.status == 2) {
                _this.url = "http://api.givet.co.uk/api/get_prod_fav.php?user_id=" + _this.user_id_2 + "&wish_id=" + _this.other_id;
                _this.getData();
            }
        });
    };
    SelectProductPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            if (this.status == 1) {
                this.url = "http://api.givet.co.uk/api/search_select_wish_prod.php?fav_title=" + this.queryText + "&user_id=" + this.user_id_2 + "&wish_id=" + this.other_id;
                this.data = this.http.get(this.url);
                this.data.subscribe(function (data) {
                    if (data['status'] != "400 OK") {
                        _this.items_dota = data;
                    }
                    else if (data['status'] == "400 OK") {
                        _this.items_dota = null;
                    }
                });
            }
            else if (this.status == 2) {
                this.url = "http://api.givet.co.uk/api/search_select_fav_prod.php?fav_title=" + this.queryText + "&user_id=" + this.user_id_2 + "&wish_id=" + this.other_id;
                this.data = this.http.get(this.url);
                this.data.subscribe(function (data) {
                    if (data['status'] != "400 OK") {
                        _this.items_dota = data;
                    }
                    else if (data['status'] == "400 OK") {
                        _this.items_dota = null;
                    }
                });
            }
        }
    };
    SelectProductPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        if (this.status == 1) {
            this.url = "http://api.givet.co.uk/api/get_prod_wish.php?user_id=" + this.user_id_2 + "&wish_id=" + this.other_id;
            this.getData();
        }
        else if (this.status == 2) {
            this.url = "http://api.givet.co.uk/api/get_prod_fav.php?user_id=" + this.user_id_2 + "&wish_id=" + this.other_id;
            this.getData();
        }
    };
    SelectProductPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SelectProductPage.prototype.updateCucumber = function (item) {
        var _this = this;
        this.url = "http://api.givet.co.uk/api/insert_prod_in_cache.php?user_id=" + this.user_id_2 + "&prod_id=" + item['id'];
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
    };
    SelectProductPage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.url = "http://api.givet.co.uk/api/select_cache.php?user_id=" + this.user_id_2;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
            if (data != null) {
                if (_this.status == 1) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var god = data_1[_i];
                        _this.url2 = "http://api.givet.co.uk/api/add_prod_to_wish.php";
                        var postData = new FormData();
                        postData.append('wish_id', _this.other_id);
                        postData.append('prod_id', god['prod_id']);
                        _this.data2 = _this.http.post(_this.url2, postData);
                        _this.data2.subscribe(function (data) {
                        });
                    }
                    _this.url = "http://api.givet.co.uk/api/delete_cache.php?user_id=" + _this.user_id_2;
                    _this.data = _this.http.get(_this.url);
                    _this.data.subscribe(function (data) {
                        _this.items = data;
                        _this.loading.dismiss();
                        _this.navCtrl.pop();
                    });
                }
                else if (_this.status == 2) {
                    for (var _a = 0, data_2 = data; _a < data_2.length; _a++) {
                        var god = data_2[_a];
                        _this.url2 = "http://api.givet.co.uk/api/add_prod_to_fav.php";
                        var postData = new FormData();
                        postData.append('fav_id', _this.other_id);
                        postData.append('prod_id', god['prod_id']);
                        _this.data2 = _this.http.post(_this.url2, postData);
                        _this.data2.subscribe(function (data) {
                        });
                    }
                    _this.url = "http://api.givet.co.uk/api/delete_cache.php?user_id=" + _this.user_id_2;
                    _this.data = _this.http.get(_this.url);
                    _this.data.subscribe(function (data) {
                        _this.items = data;
                        _this.loading.dismiss();
                        _this.navCtrl.pop();
                    });
                }
            }
            else {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
        });
    };
    SelectProductPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.loading.dismiss();
            if (data['status'] != "400 OK") {
                _this.items_dota = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items_dota = null;
            }
        });
        //  this.loading.dismiss();
    };
    SelectProductPage.prototype.moToCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_create_products_create__["a" /* ProductsCreatePage */]);
    };
    SelectProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-product',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\select-product\select-product.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!searchBar">{{select_prod_lang}}</ion-title>\n\n      <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n      (ionInput)="updateText($event)"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n     \n    </ion-navbar>\n  \n  </ion-header>\n  \n\n \n  \n  <ion-content>\n  \n    \n  \n      \n      <ion-list *ngIf="items_dota == null " text-center>\n\n    \n          <button *ngIf="items_dota == null" (click)="moToCreate()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new_lang}}</button>\n        </ion-list>\n  \n       \n       \n    <ion-list *ngFor="let item of items_dota; ">\n\n        <ion-col   no-padding>\n  \n            <ion-card>\n                \n                <ion-item>\n                    <ion-label>{{item.name}}</ion-label>\n                    <ion-checkbox (ionChange)="updateCucumber(item)" ></ion-checkbox>\n                </ion-item>\n\n              \n                <ion-card-header *ngIf=" item.rating == \'0\'" class="no-mg">\n\n\n\n                  <ion-icon  name="star" class=" unchecked 1"></ion-icon>\n                  \n                  <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n\n                  \n                  \n                </ion-card-header>\n\n\n          <ion-card-header *ngIf=" item.rating == \'1\'" class="no-mg">\n\n\n\n              <ion-icon  name="star" class=" checked 1"></ion-icon>\n              \n              <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n              <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n              <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n              <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n\n              \n              \n            </ion-card-header>\n\n            <ion-card-header *ngIf=" item.rating == \'2\'" class="no-mg">\n\n\n\n                  <ion-icon  name="star" class=" checked 1"></ion-icon>\n                  \n                  <ion-icon  name="star" class=" checked 2"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n\n                  \n                  \n                </ion-card-header>\n\n                <ion-card-header *ngIf=" item.rating == \'3\'" class="no-mg">\n\n\n\n                      <ion-icon  name="star" class=" checked 1"></ion-icon>\n                      \n                      <ion-icon  name="star" class=" checked 2"></ion-icon>\n                      <ion-icon  name="star" class=" checked 3"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n  \n                      \n                      \n                    </ion-card-header>\n\n                    <ion-card-header *ngIf=" item.rating == \'4\'" class="no-mg">\n\n\n\n                          <ion-icon  name="star" class=" checked 1"></ion-icon>\n                          \n                          <ion-icon  name="star" class=" checked 2"></ion-icon>\n                          <ion-icon  name="star" class=" checked 3"></ion-icon>\n                          <ion-icon  name="star" class=" checked 4"></ion-icon>\n                          <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n      \n                          \n                          \n                        </ion-card-header>\n\n                        <ion-card-header *ngIf=" item.rating == \'5\'" class="no-mg">\n\n\n\n                              <ion-icon  name="star" class=" checked 1"></ion-icon>\n                              \n                              <ion-icon  name="star" class=" checked 2"></ion-icon>\n                              <ion-icon  name="star" class=" checked 3"></ion-icon>\n                              <ion-icon  name="star" class=" checked 4"></ion-icon>\n                              <ion-icon  name="star" class=" checked 5"></ion-icon>\n          \n                              \n                              \n                            </ion-card-header>\n\n            <ion-card-header class="no-mg">\n                <span class="label label-success">                  \n                    <ion-icon name="md-cash"></ion-icon> {{item.price}}</span> \n                \n                    <span class="label label-warning">                  \n                        <ion-icon name="ios-grid-outline"></ion-icon> {{item.quan}}</span> \n              </ion-card-header>\n          \n        \n          <ion-card-content [innerHtml]="(item.details | slice:0:150) + (item.details.length > 150 ? \'...\' : \'\') ">\n             \n          </ion-card-content>\n              \n              </ion-card>\n  \n        </ion-col>\n      \n    </ion-list>\n\n    \n  \n  </ion-content>\n\n  <ion-footer align-title="center" class="bar-balanced" style="background-color: transparent">\n    <button ion-button full style="margin:0px;padding: 0px;background-color: green"(click)="save()">{{add_lang}}</button>\n  </ion-footer>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\select-product\select-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], SelectProductPage);
    return SelectProductPage;
}());

//# sourceMappingURL=select-product.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlist_create_wishlist_create__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_view_wishlist_view__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the WishListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishListPage = /** @class */ (function () {
    function WishListPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.items_count = [];
        this.dev = [];
        this.devs = {};
        this.searchBar = false;
        this.reset = navParams.get('reset');
    }
    WishListPage.prototype.ionViewDidEnter = function () {
        this.presentLoadingDefault();
        this.loadDB();
    };
    WishListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.loadDB();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    WishListPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_wishlist.php?wishlist_name=" + this.queryText + "&user_id=" + this.user_id_2;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    WishListPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.loadDB();
    };
    WishListPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            // alert(JSON.stringify(this.dev));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.fav_eng = data['wishlist'];
                _this.products_eng = data['product'];
                _this.create_new_lang = data['create_new'];
            });
            _this.url = "http://api.givet.co.uk/api/my_wishlist.php?user_id=0";
            _this.getData();
        });
    };
    WishListPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    WishListPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    WishListPage.prototype.moveToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wishlist_create_wishlist_create__["a" /* WishlistCreatePage */]);
    };
    WishListPage.prototype.moveToWish = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wishlist_view_wishlist_view__["a" /* WishlistViewPage */], {
            id: items['id']
        });
    };
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wish-list',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wish-list\wish-list.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!searchBar">{{fav_eng}}</ion-title>\n    \n    <ion-buttons *ngIf="!searchBar" end style="margin-right: 3px;">\n        <button ion-button icon-only (click)="moveToLogin()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n      (ionInput)="updateText($event)"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingText="Pull to refresh..."\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n\n\n      <ion-list *ngIf="items == null " text-center>\n\n    \n          <button *ngIf="items == null" (click)="moveToLogin()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new_lang}}</button>\n        </ion-list>\n  \n    \n  \n  \n\n  <ion-list *ngIf="items != null">\n      \n      <ion-col *ngFor="let item of items"  no-padding>\n\n          <ion-card (click)="moveToWish(item)">\n              <ion-avatar item-start>\n                  <img *ngIf="item.image != null && item.image.length > 0" src="https://givet.co.uk/backend/web/images/{{item.image}}"/>\n                  <img *ngIf="item.image == null || item.image.length <= 0" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n                </ion-avatar>\n              <ion-card-header class="bot-pd" [innerHtml]="item.title">\n               \n            \n              </ion-card-header>\n\n              <ion-card-header class="no-mg">\n        \n                  <span *ngIf=" item.type == \'0\'" class="label label-danger">                  \n                      Private</span> \n                      <span *ngIf=" item.type == \'1\'" class="label label-warning">                  \n                          Shared</span> \n                          <span *ngIf=" item.type == \'2\'" class="label label-success">                  \n                              Public</span> \n                  \n                </ion-card-header>\n              \n            \n              <ion-card-content [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') ">\n\n                \n            \n              </ion-card-content>\n            \n              <ion-row>\n              \n                  <ion-col>\n                      <button ion-button icon-start clear small>\n                        <ion-icon name="briefcase"></ion-icon>\n                        <div>{{products_eng}}: {{item.count}}</div>\n                     \n                      </button>\n                    </ion-col>\n\n                    <ion-col>\n                      <button ion-button icon-start clear small>\n                        <ion-icon name="md-calendar"></ion-icon>\n                        <div>{{item.date_add}}</div>\n                      </button>\n                    </ion-col>\n                  \n                </ion-row>\n\n            </ion-card>\n\n      </ion-col>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wish-list\wish-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WishlistCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistCreatePage = /** @class */ (function () {
    function WishlistCreatePage(navCtrl, navParams, alertCtrl, http, loadingCtrl, databaseProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.camera = camera;
        this.result = [];
        this.dev = [];
        this.devs = {};
        this.loginData = { title: '', desc: '', type: '', private: '' };
        this.status = navParams.get('status');
        if (this.status == 1) {
            this.other_id = navParams.get('event_id');
        }
        else {
            this.other_id = null;
        }
        this.loadDB();
    }
    WishlistCreatePage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    WishlistCreatePage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
        }, function (err) {
            // Handle error
        });
    };
    WishlistCreatePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            alert(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    WishlistCreatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    WishlistCreatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.create_wish = data['create_wish'];
                _this.image_lang = data['image'];
                _this.update_image_lang = data['update_image'];
                _this.title_lang = data['title'];
                _this.type_lang = data['type'];
                _this.private_lang = data['private'];
                _this.desc_lang = data['description'];
                _this.create_new = data['create_new'];
            });
        });
    };
    WishlistCreatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.title.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.desc.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.private.length <= 0) {
            this.loading.dismiss();
            this.presentAlertPrivate();
        }
        else if (this.loginData.type.length <= 0) {
            this.loading.dismiss();
            this.presentAlertType();
        }
        else {
            this.url = "http://api.givet.co.uk/api/create_wishlist.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id_2);
            postData.append('title', this.loginData.title);
            postData.append('description', this.loginData.desc);
            postData.append('private', this.loginData.private);
            postData.append('type', this.loginData.type);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                if (data['max(id)'] != null) {
                    _this.new_id = data['max(id)'];
                    if (_this.status == 1) {
                        _this.url = "http://api.givet.co.uk/api/add_wish_to_event.php";
                        var postData_1 = new FormData();
                        postData_1.append('event_id', _this.other_id);
                        postData_1.append('wish_id', _this.new_id);
                        _this.data = _this.http.post(_this.url, postData_1);
                        _this.data.subscribe(function (data) {
                            _this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                            var postData = new FormData();
                            postData.append('img', _this.picture_new);
                            postData.append('user_id', _this.new_id);
                            postData.append('image_name', 'wish_image.jpg');
                            postData.append('type', 'wish');
                            _this.data = _this.http.post(_this.url, postData);
                            _this.data.subscribe(function (data) {
                                _this.loading.dismiss();
                            });
                            _this.navCtrl.pop();
                            //  this.navCtrl.setRoot(EventsViewPage,{id:this.other_id});
                        });
                        //this.navCtrl.pop();
                        //  this.navCtrl.setRoot(WishListPage,{reset:1});
                    }
                    else {
                        _this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                        var postData_2 = new FormData();
                        postData_2.append('img', _this.picture_new);
                        postData_2.append('user_id', data['max(id)']);
                        postData_2.append('image_name', 'wish_image.jpg');
                        postData_2.append('type', 'wish');
                        _this.data = _this.http.post(_this.url, postData_2);
                        _this.data.subscribe(function (data) {
                            _this.loading.dismiss();
                        });
                        _this.navCtrl.pop();
                        //this.navCtrl.setRoot(WishListPage,{reset:1});
                    }
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(_this.loginData);
                console.log(data);
            });
        }
    };
    WishlistCreatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Title.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistCreatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistCreatePage.prototype.presentAlertPrivate = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Private.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistCreatePage.prototype.presentAlertType = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Type.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistCreatePage.prototype.presentImg = function (b) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: b,
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistCreatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistCreatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wishlist-create',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wishlist-create\wishlist-create.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>{{create_wish}}</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n\n    <ion-list style="background-color: #fff;" >   \n            \n      <img  src = "{{base64Image}}" />\n      \n        <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n              {{image_lang}}\n            </ion-label>\n          \n            \n          </ion-item>\n          <ion-item>\n              <button  ion-button icon-end (click)="openModal()">\n                  {{update_image_lang}}\n                  <ion-icon name="cloud-download"></ion-icon>\n                </button>\n\n              </ion-item>\n\n          \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         {{title_lang}} *\n        </ion-label>\n          <ion-input type="text"  [(ngModel)]="loginData.title" placeholder="{{title_lang}} "></ion-input>\n        \n      </ion-item>\n      \n      <ion-item>\n        <ion-label  color="primary" stacked>{{type_lang}} *</ion-label>\n          <ion-select  [(ngModel)]="loginData.type" placeholder="{{type_lang}} ">\n            <ion-option value="0">Private</ion-option>\n            <ion-option value="1">Shared</ion-option>\n            <ion-option value="2">Public</ion-option>\n          </ion-select>\n        </ion-item>\n\n      <ion-item>\n          <ion-icon name="password" ></ion-icon>\n          <ion-label  color="primary" stacked>\n            {{private_lang}} *\n          </ion-label>\n            <ion-textarea type="text" [(ngModel)]="loginData.private"  placeholder="{{private_lang}} "></ion-textarea>\n          \n        </ion-item>\n  \n      <ion-item>\n          <ion-icon name="person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n              {{desc_lang}} *</ion-label>\n            \n            <ion-textarea  type="text"   [(ngModel)]="loginData.desc" placeholder="{{desc_lang}} " rows="4"></ion-textarea >\n             \n        </ion-item>\n  \n\n\n          <button ion-button full (click)="save()">{{create_new}}</button>\n          \n\n\n              \n            \n            <ion-item>\n\n              \n            </ion-item>\n\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wishlist-create\wishlist-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], WishlistCreatePage);
    return WishlistCreatePage;
}());

//# sourceMappingURL=wishlist-create.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift_profile_gift_profile__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__social_friends_social_friends__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setting_profile_setting_profile__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_products__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__articles_articles__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_product_global_product__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gallery_gallery__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__global_user_global_user__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, navParams, modalCtrl, http, alertCtrl, loadingCtrl, databaseProvider, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.app = app;
        this.dev = [];
        this.devs = {};
    }
    MyProfilePage_1 = MyProfilePage;
    MyProfilePage.prototype.moveToProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__products_products__["a" /* ProductsPage */], {
            id: this.user_id_2
        });
    };
    MyProfilePage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang_test = data['languages'];
                _this.lang_id = data['lang_id'];
                _this.profile_lang = data['profile'];
                _this.name_lang = data['name'];
                _this.email_eng = data['email'];
                _this.phone_eng = data['number'];
                _this.bithday_eng = data['bithday'];
                _this.home_adress_eng = data['home'];
                _this.mail_adress_eng = data['mail'];
                _this.gift_eng = data['gift'];
                _this.product_eng = data['product'];
                _this.friends_eng = data['friend'];
                _this.friends_soc_eng = data['social'];
                _this.global_page_eng = data['glob_page'];
                _this.arc_eng = data['arc'];
                _this.all_prod_eng = data['all_prod'];
                _this.gal_eng = data['gallery'];
                _this.user_eng = data['users'];
                _this.exit_eng = data['exits'];
            });
            _this.url = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id_2;
            _this.getData();
        });
    };
    MyProfilePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MyProfilePage.prototype.presentTwit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'You Twitter Link',
            inputs: [
                {
                    name: 'link',
                    placeholder: 'Link',
                    value: this.twit,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.saveTW(data.link);
                    }
                }
            ]
        });
        alert.present();
    };
    MyProfilePage.prototype.presentInst = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'You Instagram Link',
            inputs: [
                {
                    name: 'link',
                    placeholder: 'Link',
                    value: this.inst,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.saveInst(data.link);
                    }
                }
            ]
        });
        alert.present();
    };
    MyProfilePage.prototype.presentGoogle = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'You Google Link',
            inputs: [
                {
                    name: 'link',
                    placeholder: 'Link',
                    value: this.google,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.saveGG(data.link);
                    }
                }
            ]
        });
        alert.present();
    };
    MyProfilePage.prototype.presentFacebook = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'You Facebook Link',
            inputs: [
                {
                    name: 'link',
                    placeholder: 'Link',
                    value: this.fb,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.saveFB(data.link);
                        //console.log(data.link);
                    }
                }
            ]
        });
        alert.present();
    };
    MyProfilePage.prototype.clickOption = function (id) {
        this.inter = id;
    };
    MyProfilePage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.id = data['id'];
            _this.name = data['name'];
            _this.email = data['email'];
            _this.surename = data['surename'];
            _this.image = data['image'];
            _this.bithday = data['bithday'];
            if (_this.bithday.length > 0) {
                _this.bithday = data['bithday'];
            }
            else {
                _this.bithday = "-";
            }
            _this.phone = data['phone'];
            if (_this.phone.length > 0) {
                _this.phone = data['phone'];
            }
            else {
                _this.phone = "-";
            }
            _this.home_adress = data['home_adress'];
            if (_this.home_adress.length > 0) {
                _this.home_adress = data['home_adress'];
            }
            else {
                _this.home_adress = "-";
            }
            _this.mail_adress = data['mail_adress'];
            if (_this.mail_adress.length > 0) {
                _this.mail_adress = data['mail_adress'];
            }
            else {
                _this.mail_adress = "-";
            }
            _this.url_count = "http://api.givet.co.uk/api/count_user.php?user_id=" + _this.user_id_2;
            var person = "http";
            var personRegExp = new RegExp(person);
            if (personRegExp.test(_this.image)) {
                console.log(person + " is a philosopher.");
                _this.test = '1';
            }
            else {
                console.log(person + " is NOT a philosopher.");
            }
            _this.data_count = _this.http.get(_this.url_count);
            _this.data_count.subscribe(function (data_count) {
                _this.events = data_count['events'];
                _this.wishlist = data_count['wishlist'];
                _this.fav_list = data_count['fav_list'];
                _this.groups = data_count['groups'];
                _this.friends = data_count['friends'];
                _this.url_soc = "http://api.givet.co.uk/api/get_social.php?user_id=" + _this.user_id_2;
                _this.data_soc = _this.http.get(_this.url_soc);
                _this.data_soc.subscribe(function (data_soc) {
                    for (var _i = 0, data_soc_1 = data_soc; _i < data_soc_1.length; _i++) {
                        var item = data_soc_1[_i];
                        if (item['soc_type'] == "twit") {
                            _this.twit = item['link'];
                        }
                        else if (item['soc_type'] == "google") {
                            _this.google = item['link'];
                        }
                        else if (item['soc_type'] == "inst") {
                            _this.inst = item['link'];
                        }
                        else if (item['soc_type'] == "fb") {
                            _this.fb = item['link'];
                        }
                        console.log(item);
                    }
                    _this.loading.dismiss();
                });
            });
        });
        this.loading.dismiss();
    };
    MyProfilePage.prototype.optionsFn = function () {
        this.presentLoadingDefault();
        this.lang = this.inter;
        var url = "http://api.givet.co.uk/api/set_lang.php";
        var postData = new FormData();
        postData.append('user_id', this.id);
        postData.append('lang_id', this.inter);
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            document.location.href = 'index.html';
        });
    };
    MyProfilePage.prototype.exit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'You want to exit?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function (data) {
                        _this.databaseProvider.deleteDrop().then(function (date) {
                            // this.navCtrl.setRoot(LoginPage);
                        });
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MyProfilePage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    MyProfilePage.prototype.moveToGiftProfile = function (ids) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gift_profile_gift_profile__["a" /* GiftProfilePage */], {
            id: ids
        });
    };
    MyProfilePage.prototype.moveToFriendsPage = function (ids) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* FriendsPage */], {
            id: ids
        });
    };
    MyProfilePage.prototype.moveToArct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__articles_articles__["a" /* ArticlesPage */]);
    };
    MyProfilePage.prototype.moveToProd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__global_product_global_product__["a" /* GlobalProductPage */]);
    };
    MyProfilePage.prototype.moveToGallery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__gallery_gallery__["a" /* GalleryPage */]);
    };
    MyProfilePage.prototype.moveToUsers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__global_user_global_user__["a" /* GlobalUserPage */]);
    };
    MyProfilePage.prototype.moveToSocialFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__social_friends_social_friends__["a" /* SocialFriendsPage */]);
    };
    MyProfilePage.prototype.moveToSet = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__setting_profile_setting_profile__["a" /* SettingProfilePage */], {
            id: id
        });
    };
    MyProfilePage.prototype.saveFB = function (link) {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/insert_social.php";
        var postData = new FormData();
        postData.append('user_id', this.id);
        postData.append('soc_type', 'fb');
        postData.append('link', link);
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                // this.presentYes();
                _this.navCtrl.setRoot(MyProfilePage_1);
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    MyProfilePage.prototype.saveTW = function (link) {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/insert_social.php";
        var postData = new FormData();
        postData.append('user_id', this.id);
        postData.append('soc_type', 'twit');
        postData.append('link', link);
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                // this.presentYes();
                _this.navCtrl.setRoot(MyProfilePage_1);
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    MyProfilePage.prototype.saveGG = function (link) {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/insert_social.php";
        var postData = new FormData();
        postData.append('user_id', this.id);
        postData.append('soc_type', 'google');
        postData.append('link', link);
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                // this.presentYes();
                _this.navCtrl.setRoot(MyProfilePage_1);
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    MyProfilePage.prototype.saveInst = function (link) {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/insert_social.php";
        var postData = new FormData();
        postData.append('user_id', this.id);
        postData.append('soc_type', 'inst');
        postData.append('link', link);
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                //  this.presentYes();
                _this.navCtrl.setRoot(MyProfilePage_1);
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    MyProfilePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    MyProfilePage.prototype.presentYes = function () {
        var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Your link is add',
            buttons: ['Ok']
        });
        alert.present();
    };
    MyProfilePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Link not found.',
            buttons: ['Ok']
        });
        alert.present();
    };
    MyProfilePage = MyProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\my-profile\my-profile.html"*/'<ion-header>\n  <ion-toolbar >\n    <ion-buttons >\n      \n    </ion-buttons>\n    <ion-title>{{profile_lang}}</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only (click)="moveToSet(id)">\n          <ion-icon name="ios-create-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  \n\n  <ion-list >\n     \n  \n          <ion-avatar class="img_prof" >\n            <img class="goga" *ngIf=" test != null" src="{{image}}">\n            <img class="goga" *ngIf=" test == null && image !=null && image.length > 0" src="https://givet.co.uk/backend/web/images/users/{{image}}">\n            <img *ngIf="test == null && image == null || image.length <= 0" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n            \n            </ion-avatar>\n         \n          \n           \n    <ion-item>\n      <ion-icon name="ios-person" ></ion-icon>\n      <ion-label>\n        <p>{{name_lang}}</p>\n        <h2>{{name}} {{surename}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="mail" ></ion-icon>\n      <ion-label>\n          <p>{{email_eng}}</p>\n        <h2>{{email}}</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-icon name="person" ></ion-icon>\n        <ion-label>\n            <p>{{phone_eng}}</p>\n          <h2>{{phone}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-icon name="person" ></ion-icon>\n          <ion-label>\n              <p>{{bithday_eng}}</p>\n            <h2>{{bithday}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="person" ></ion-icon>\n            <ion-label>\n                <p>{{home_adress_eng}}</p>\n              <h2>{{home_adress}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-icon name="person" ></ion-icon>\n              <ion-label>\n                  <p>{{mail_adress_eng}}</p>\n                <h2>{{mail_adress}}</h2>\n              </ion-label>\n            </ion-item>\n\n            \n            <ion-item >\n                <ion-label >{{lang_test}}</ion-label>\n             \n<ion-select  *ngIf="lang_id == \'1\'" [(ngModel)]="lang" (ngModelChange)="optionsFn()">\n  <ion-option value="English" (ionSelect)="clickOption(1)" selected>English</ion-option>\n  <ion-option value="Română" (ionSelect)="clickOption(2)" >Română</ion-option>\n</ion-select>\n\n\n<ion-select *ngIf="lang_id == \'2\'" [(ngModel)]="lang" (ngModelChange)="optionsFn()">\n  <ion-option value="English" (ionSelect)="clickOption(1)" >English</ion-option>\n  <ion-option value="Română" (ionSelect)="clickOption(2)" selected>Română</ion-option>\n</ion-select>\n\n</ion-item>\n\n\n            <button ion-item (click)="moveToGiftProfile($id, id)"> \n                <ion-icon name="bowtie" item-start></ion-icon>\n                {{gift_eng}}\n              </button>\n\n              <button  ion-item (click)="moveToProducts()"> \n                <ion-icon name="briefcase" item-start></ion-icon>\n                {{product_eng}}\n              </button>\n\n          \n\n                <button  ion-item (click)="moveToFriendsPage($id, id)">\n                    <ion-icon name="man" item-start></ion-icon>\n                    {{friends_eng}}\n                    <ion-badge item-end>{{friends}}</ion-badge>\n                  </button>\n\n\n                <button  ion-item (click)="moveToSocialFriends()">\n                    <ion-icon name="md-globe" item-start></ion-icon>\n                    {{friends_soc_eng}}\n                   \n                  </button>\n\n               \n\n                  <button ion-item > \n                  <p style="background-color: white;color: gray">{{global_page_eng}}</p>\n\n                </button>\n\n                  <button ion-item (click)="moveToArct()">\n                      <ion-icon name="bookmarks" item-start></ion-icon>\n                      {{arc_eng}}\n                     \n                    </button>\n\n                    <button  ion-item (click)="moveToProd()">\n                        <ion-icon name="cloud" item-start></ion-icon>\n                        {{all_prod_eng}}\n                       \n                      </button>\n\n                  \n\n                      <button ion-item (click)="moveToGallery()">\n                          <ion-icon name="images" item-start></ion-icon>\n                          {{gal_eng}}\n                         \n                        </button>\n  \n                        <button ion-item (click)="moveToUsers()">\n                            <ion-icon name="man" item-start></ion-icon>\n                            {{user_eng}}\n                           \n                          </button>\n\n\n            <ion-item text-center>\n              <div class="soc_type">\n                <img *ngIf=" fb != \'\' && fb != null"(click)="presentFacebook()" style="width: 30px;" src="assets/imgs/facebook.png">\n                <img *ngIf=" fb == \'\' || fb == null"(click)="presentFacebook()" style="opacity: 0.5; width: 30px;" src="assets/imgs/facebook.png">\n                <img *ngIf=" google == \'\' || google ==null" (click)="presentGoogle()" style="opacity: 0.5;width: 30px;" src="assets/imgs/google-plus.png">\n                <img *ngIf=" google != \'\' &&  google !=null " (click)="presentGoogle()" style="width: 30px;" src="assets/imgs/google-plus.png">\n\n\n                <img *ngIf=" inst != \'\' && inst != null" (click)="presentInst()" style="width: 30px;" src="assets/imgs/instagram.png">\n                <img *ngIf=" inst == \'\' || inst == null" (click)="presentInst()" style="opacity: 0.5;width: 30px;" src="assets/imgs/instagram.png">\n                <img *ngIf=" twit != \'\' && twit != null" (click)="presentTwit()" style="width: 30px;" src="assets/imgs/twitter.png">\n                <img *ngIf=" twit == \'\' || twit == null" (click)="presentTwit()" style="opacity: 0.5;width: 30px;" src="assets/imgs/twitter.png">\n              </div>\n            </ion-item>\n\n            <ion-item text-center>\n                <h2 style=" color: red;" (click)="exit()"> {{exit_eng}}</h2>\n              </ion-item>\n              <ion-item text-center>\n               \n              </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\my-profile\my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], MyProfilePage);
    return MyProfilePage;
    var MyProfilePage_1;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ArticleViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArticleViewPage = /** @class */ (function () {
    function ArticleViewPage(navCtrl, navParams, http, loadingCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.dev = [];
        this.devs = {};
        this.items_dota = [];
        this.loginData = { title: '', image: '', desc: '', date: '' };
        this.ids = navParams.get('id');
        this.presentLoadingDefault();
        this.url = "http://api.givet.co.uk/api/info_article.php?arc_id=" + this.ids;
        this.getData();
    }
    ArticleViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ArticleViewPage.prototype.share = function () {
        // Check if sharing via email is supported
        this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/article_page&id=" + this.ids).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    ArticleViewPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            //  this.items = data;
            _this.loginData.title = data['title'];
            _this.image = data['image'];
            _this.desc = data['decription'];
            _this.date = data['date'];
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    ArticleViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-article-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\article-view\article-view.html"*/'<!--\n  Generated template for the ArticleViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ (loginData.title | slice:0:25) + (loginData.title.length > 25 ? \'...\' : \'\')}}</ion-title>\n  \n     \n    </ion-navbar>\n  \n  </ion-header>\n  \n\n\n<ion-content >\n\n\n    <ion-card >\n        <img *ngIf=" image!=null " src="http://api.givet.co.uk/backend/web/img/categories/{{image}}"/>\n        <img *ngIf="image==null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{loginData.title}}\n            </ion-card-title>\n\n            <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon name="md-create"></ion-icon>\n                    <div>admin</div>\n                  </button>\n                </ion-col>\n    \n                <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="md-calendar"></ion-icon>\n                      <div>{{date}}</div>\n                    </button>\n                  </ion-col>\n    \n    \n               \n                \n              </ion-row>\n\n          <p  [innerHtml]="desc">\n           \n          </p>\n        </ion-card-content>\n\n\n        <ion-item >\n            <button ion-button (click)="share()">Share</button>\n        </ion-item>\n    \n       \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\article-view\article-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ArticleViewPage);
    return ArticleViewPage;
}());

//# sourceMappingURL=article-view.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddUsersPage = /** @class */ (function () {
    function AddUsersPage(navCtrl, navParams, http, alertCtrl, viewCtrl, loadingCtrl, databaseProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.items_users = [];
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
        this.ids = navParams.get('id');
        this.loadDB();
    }
    AddUsersPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    AddUsersPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_friend.php?user_id=" + this.user_id + "&email=" + this.queryText;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    AddUsersPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/my_user_in_group.php?user_id=" + this.user_id + "&group_id=" + this.ids;
        this.getData();
    };
    AddUsersPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/my_user_in_group.php?user_id=" + _this.user_id + "&group_id=" + _this.ids;
            _this.getData();
        });
    };
    AddUsersPage.prototype.addUser = function (item) {
        var _this = this;
        //this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_user_in_group.php";
        var postData = new FormData();
        postData.append('user_id', item['id']);
        postData.append('group_id', this.ids);
        postData.append('add', '0');
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                //  this.loading.dismiss();
                _this.presentToast();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                // this.presentError();
            }
            // this.loading.dismiss();
        });
    };
    AddUsersPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddUsersPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddUsersPage.prototype.presentYes = function () {
        var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Friend add to group',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddUsersPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AddUsersPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
        });
    };
    AddUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-users',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\add-users\add-users.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n\n    <ion-navbar>\n        <ion-title *ngIf="!searchBar">\n            Users\n            </ion-title>\n  \n            <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n            (ionInput)="updateText($event)"></ion-searchbar>\n        \n            <ion-buttons end>\n              <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n              <ion-icon name="search"></ion-icon>\n            </button>\n            </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n\n<ion-content>\n\n    <ion-list *ngIf="items == null" text-center>\n\n        <p  style=" color: antiquewhite" >All friends are already in the group or you have no friends.</p>\n    \n    \n      </ion-list>\n\n    <ion-list *ngIf="items != null " >\n\n        <ion-col *ngFor="let item of items;"  no-padding>\n\n        <ion-card>\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="https://givet.co.uk/backend/web/images/users/{{item.image}}">\n              </ion-avatar>\n              <button ion-button icon-start clear item-end>\n                  \n                </button>\n              <h2>{{item.name}} {{item.surename}}</h2>\n              <p>{{item.email}}</p>\n              <p>{{item.bithday}}</p>\n              <p>{{item.phone}}</p>\n\n             \n              \n            </ion-item>\n           \n\n          <ion-item> \n            <button *ngIf="item.status == \'1\' " ion-button>Waiting...</button>\n\n            <button *ngIf="item.status == \'2\' " ion-button>In Group</button>\n\n<button ion-button color="secondary" *ngIf="item.status == \'0\' " (click)="addUser(item)">Add to group</button>\n\n</ion-item>\n\n            </ion-card>\n\n          </ion-col>\n    </ion-list >\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\add-users\add-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AddUsersPage);
    return AddUsersPage;
}());

//# sourceMappingURL=add-users.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_view_article_view__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArticlesPage = /** @class */ (function () {
    function ArticlesPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.dev = [];
        this.devs = {};
        this.searchBar = false;
        this.presentLoadingDefault();
        this.url = "http://api.givet.co.uk/api/article.php";
        this.getData();
    }
    ArticlesPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ArticlesPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    ArticlesPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_view_article_view__["a" /* ArticleViewPage */], {
            id: item['id']
        });
    };
    ArticlesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-articles',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\articles\articles.html"*/'<!--\n  Generated template for the ArticlesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title >Articles</ion-title>      \n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-list>\n\n  <ion-col *ngFor="let item of items"  no-padding>\n\n\n    <ion-card (click)="moToView(item)">\n        <img *ngIf="item.image!=null" src="http://api.givet.co.uk/backend/web/img/categories/{{item.image}}"/>\n        <img *ngIf="item.image==null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{item.title}}\n            </ion-card-title>\n          <p  [innerHtml]="(item.decription | slice:0:150) + (item.decription.length > 150 ? \'...\' : \'\') ">\n           \n          </p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon name="md-create"></ion-icon>\n                <div>admin</div>\n              </button>\n            </ion-col>\n\n            <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="md-calendar"></ion-icon>\n                  <div>{{item.date}}</div>\n                </button>\n              </ion-col>\n\n\n           \n            \n          </ion-row>\n      </ion-card>\n\n    </ion-col>\n    \n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\articles\articles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], ArticlesPage);
    return ArticlesPage;
}());

//# sourceMappingURL=articles.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EventsCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsCreatePage = /** @class */ (function () {
    function EventsCreatePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.result = [];
        this.loginData = { name: '', desc: '', date: '', time: '', rap: '' };
        this.dev = [];
        this.devs = {};
        this.loadDB();
    }
    EventsCreatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    EventsCreatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['name'];
                _this.desc = data['description'];
                _this.date_eng = data['date'];
                _this.time_eng = data['time'];
            });
        });
    };
    EventsCreatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.desc.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.date.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDate();
        }
        else if (this.loginData.time.length <= 0) {
            this.loading.dismiss();
            this.presentAlertTime();
        }
        else if (this.loginData.rap.length <= 0) {
            this.loading.dismiss();
            this.presentAlertRap();
        }
        else {
            var url = "http://api.givet.co.uk/api/create_event.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('name', this.loginData.name);
            postData.append('description', this.loginData.desc);
            postData.append('date', this.loginData.date);
            postData.append('time', this.loginData.time);
            postData.append('repeat', this.loginData.rap);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                if (data['event']['status'] == "200 OK") {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */], { reset: 1 });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(data);
            });
        }
        this.loading.dismiss();
    };
    EventsCreatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage.prototype.presentAlertDate = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Date.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage.prototype.presentAlertTime = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Time.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage.prototype.presentAlertRap = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Repeat.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage.prototype.presentTest = function () {
        var alert = this.alertCtrl.create({
            title: 'Test',
            subTitle: "user_id: " + this.user_id + " name: " + this.loginData.name + " desc: " + this.loginData.desc + " date: " + this.loginData.date +
                " time: " + this.loginData.time + " rep: " + this.loginData.rap,
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-events-create',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events-create\events-create.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Create Event</ion-title>\n  \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    \n  \n    <ion-list >   \n\n      <ion-item>\n          <ion-icon name="ios-person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n            {{lang}} *\n          </ion-label>\n      \n            <ion-input type="text"  [(ngModel)]="loginData.name"  placeholder="{{lang}} "></ion-input>\n        \n        </ion-item>\n\n        <ion-item>\n            <ion-icon name="person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n              {{desc}} *\n            </ion-label>\n              <ion-textarea  type="text"  [(ngModel)]="loginData.desc" placeholder="{{desc}} " rows="4"></ion-textarea >\n            \n          </ion-item>\n\n  \n          <ion-item>\n              <ion-icon name="person" ></ion-icon>\n              <ion-label  color="primary" stacked>\n                {{date_eng}} *\n              </ion-label>\n\n\n                <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="loginData.date"  max="2050" placeholder="{{date_eng}} "></ion-datetime>\n              \n            \n\n            </ion-item>\n\n\n            <ion-item>\n                <ion-icon name="person" ></ion-icon>\n                <ion-label color="primary" stacked>\n                  {{time_eng}} *\n                </ion-label>\n               \n                  <ion-datetime displayFormat="h:mm A"  [(ngModel)]="loginData.time" pickerFormat="h mm A" placeholder="{{time_eng}} "></ion-datetime>\n                  \n                \n              </ion-item>\n\n              <ion-item>\n                <ion-label  color="primary" stacked >Repeat</ion-label>\n                  <ion-select  [(ngModel)]="loginData.rap" placeholder="Repeat *">\n                    <ion-option value="0">Weekly</ion-option>\n                    <ion-option value="1">Monthly</ion-option>\n                    <ion-option value="2">Yearly</ion-option>\n                    <ion-option value="3">One Time</ion-option>\n                  </ion-select>\n                </ion-item>\n  \n\n              \n\n                  <button ion-button full (click)="save()">Create</button>\n              \n           \n    \n      \n  \n              \n\n              <ion-item>\n\n              \n              </ion-item>\n  \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events-create\events-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], EventsCreatePage);
    return EventsCreatePage;
}());

//# sourceMappingURL=events-create.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_view_events_view__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { EventsPage } from '../events/events';


/**
 * Generated class for the EventsUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsUpdatePage = /** @class */ (function () {
    function EventsUpdatePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.result = [];
        this.loginData = { name: '', desc: '', date: '', time: '', rap: '' };
        this.ids = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/info_events.php?event_id=" + this.ids;
        this.getData();
    }
    EventsUpdatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    EventsUpdatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['name'];
                _this.desc = data['description'];
                _this.date_eng = data['date'];
                _this.time_eng = data['time'];
                _this.updates = data['updates'];
            });
        });
    };
    EventsUpdatePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.loginData.name = data['name'];
            _this.loginData.desc = data['description'];
            _this.loginData.date = data['date'];
            _this.loginData.time = data['time'];
            _this.loginData.rap = data['repeat'];
            _this.loading.dismiss();
            _this.loadDB();
        });
        this.loading.dismiss();
    };
    EventsUpdatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.desc.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.date.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDate();
        }
        else if (this.loginData.time.length <= 0) {
            this.loading.dismiss();
            this.presentAlertTime();
        }
        else if (this.loginData.rap.length <= 0) {
            this.loading.dismiss();
            this.presentAlertRap();
        }
        else {
            var url = "http://api.givet.co.uk/api/edit_event.php";
            var postData = new FormData();
            postData.append('event_id', this.ids);
            postData.append('name', this.loginData.name);
            postData.append('description', this.loginData.desc);
            postData.append('date', this.loginData.date);
            postData.append('time', this.loginData.time);
            postData.append('repeat', this.loginData.rap);
            this.data_post = this.http.post(url, postData);
            this.data_post.subscribe(function (data) {
                if (data['event']['status'] == "200 OK") {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__events_view_events_view__["a" /* EventsViewPage */], { id: _this.ids });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                _this.loading.dismiss();
                //  this.navCtrl.setRoot(EventsViewPage,{id:this.ids});
            });
        }
        // this.loading.dismiss();
    };
    EventsUpdatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsUpdatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsUpdatePage.prototype.presentAlertDate = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Date.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsUpdatePage.prototype.presentAlertTime = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Time.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsUpdatePage.prototype.presentAlertRap = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Repeat.',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsUpdatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    EventsUpdatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('dateTime'),
        __metadata("design:type", Object)
    ], EventsUpdatePage.prototype, "dateTime", void 0);
    EventsUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-events-update',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events-update\events-update.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>{{loginData.name}}</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    \n  \n    <ion-list >   \n \n        <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n              {{lang}} *\n            </ion-label>\n        \n              <ion-input type="text"  [(ngModel)]="loginData.name"  placeholder="{{lang}} "></ion-input>\n          \n          </ion-item>\n\n          <ion-item>\n              <ion-icon name="person" ></ion-icon>\n              <ion-label  color="primary" stacked>\n                {{desc}} *\n              </ion-label>\n                <ion-textarea  type="text"  [(ngModel)]="loginData.desc" placeholder="{{desc}} " rows="4"></ion-textarea >\n              \n            </ion-item>\n\n            <ion-item>\n                <ion-icon name="person" ></ion-icon>\n                <ion-label  color="primary" stacked>\n                  {{date_eng}} *\n                </ion-label>\n  \n  \n                  <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="loginData.date" max="2050" placeholder="{{date_eng}} "></ion-datetime>\n                \n              \n  \n              </ion-item>\n  \n\n\n              <ion-item>\n                  <ion-icon name="person" ></ion-icon>\n                  <ion-label color="primary" stacked>\n                    {{time_eng}} *\n                  </ion-label>\n                 \n                    <ion-datetime displayFormat="h:mm A"  [(ngModel)]="loginData.time" pickerFormat="h mm A" placeholder="{{time_eng}} "></ion-datetime>\n                    \n                  \n                </ion-item>\n\n            \n              <ion-item>\n                <ion-label  color="primary" stacked>Repeat *</ion-label>\n                  <ion-select [(ngModel)]="loginData.rap" placeholder="Repeat ">\n                    <ion-option [selected]="loginData.rap == 0" value="0">Weekly</ion-option>\n                    <ion-option [selected]="loginData.rap == 1" value="1">Monthly</ion-option>\n                    <ion-option [selected]="loginData.rap == 2" value="2">Yearly</ion-option>\n                    <ion-option [selected]="loginData.rap == 3" value="3">One Time</ion-option>\n                  </ion-select>\n                </ion-item>\n  \n      \n             \n\n                    <button ion-button full (click)="save()">{{updates}}</button>   \n            \n           \n\n              <ion-item>\n\n              \n              </ion-item>\n  \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events-update\events-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], EventsUpdatePage);
    return EventsUpdatePage;
}());

//# sourceMappingURL=events-update.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WishlistUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistUpdatePage = /** @class */ (function () {
    function WishlistUpdatePage(databaseProvider, navCtrl, navParams, http, alertCtrl, loadingCtrl, camera) {
        this.databaseProvider = databaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.result = [];
        this.loginData = { title: '', desc: '', type: '', private: '' };
        this.dev = [];
        this.ids = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/info_wishlist.php?wishlist_id=" + this.ids;
        this.getData();
    }
    WishlistUpdatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.create_wish = data['create_wish'];
                _this.image_lang = data['image'];
                _this.update_image_lang = data['update_image'];
                _this.title_lang = data['title'];
                _this.type_lang = data['type'];
                _this.private_lang = data['private'];
                _this.desc_lang = data['description'];
                _this.updates = data['updates'];
            });
        });
    };
    WishlistUpdatePage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    WishlistUpdatePage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
            var postData = new FormData();
            postData.append('img', imageData);
            postData.append('user_id', _this.ids);
            postData.append('image_name', 'wish_image.jpg');
            postData.append('type', 'wish');
            _this.data = _this.http.post(url, postData);
            _this.data.subscribe(function (data) {
                _this.loading.dismiss();
            });
            _this.res_image = '1';
        }, function (err) {
            // Handle error
        });
    };
    WishlistUpdatePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
            var postData = new FormData();
            postData.append('img', imageData);
            postData.append('user_id', _this.ids);
            postData.append('image_name', 'wish_image.jpg');
            postData.append('type', 'profile');
            _this.data = _this.http.post(url, postData);
            _this.data.subscribe(function (data) {
                _this.loading.dismiss();
            });
            _this.res_image = '1';
        }, function (err) {
            // Handle error
        });
    };
    WishlistUpdatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    WishlistUpdatePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.loginData.title = data['title'];
            _this.loginData.desc = data['description'];
            _this.image = data['image'];
            _this.loginData.private = data['private'];
            _this.loginData.type = data['type'];
            var person = "http";
            var personRegExp = new RegExp(person);
            if (personRegExp.test(_this.image)) {
                console.log(person + " is a philosopher.");
                _this.test = '1';
            }
            else {
                console.log(person + " is NOT a philosopher.");
            }
            _this.loading.dismiss();
            _this.loadDB();
        });
        this.loading.dismiss();
    };
    WishlistUpdatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.title.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.desc.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.private.length <= 0) {
            this.loading.dismiss();
            this.presentAlertPrivate();
        }
        else if (this.loginData.type.length <= 0) {
            this.loading.dismiss();
            this.presentAlertType();
        }
        else {
            var url = "http://api.givet.co.uk/api/edit_wishlist.php";
            var postData = new FormData();
            postData.append('wishlist_id', this.ids);
            postData.append('title', this.loginData.title);
            postData.append('description', this.loginData.desc);
            postData.append('private', this.loginData.private);
            postData.append('type', this.loginData.type);
            this.data_post2 = this.http.post(url, postData);
            this.data_post2.subscribe(function (data) {
                if (data['wishlist']['status'] == "200 OK") {
                    _this.loading.dismiss();
                    //this.navCtrl.setRoot(WishListPage,{reset:1});
                    // this.navCtrl.setRoot(WishlistViewPage,{id:this.ids});
                    _this.navCtrl.pop();
                }
                else {
                    _this.presentError();
                }
                console.log(data);
            });
        }
        this.loading.dismiss();
    };
    WishlistUpdatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistUpdatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistUpdatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Title.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistUpdatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistUpdatePage.prototype.presentAlertPrivate = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Private.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistUpdatePage.prototype.presentAlertType = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Type.',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wishlist-update',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wishlist-update\wishlist-update.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{loginData.title}}</ion-title>\n\n   \n  </ion-navbar>\n</ion-header>\n<ion-content style="\nbackground-color: #fff;">\n    <ion-list >   \n            \n      <div text-center style="\n        background-color: #fff;">\n\n        <img class="goga" *ngIf=" test != null && res_image ==null" src="{{image}}">\n        <img class="goga" *ngIf=" test == null && res_image ==null" src="https://givet.co.uk/backend/web/images/{{image}}">\n        <img class="goga" *ngIf="res_image !=null" src = "{{base64Image}}"/>\n\n    </div>\n     \n\n    <ion-item>\n        <button  ion-button icon-end (click)="openModal()">\n            {{update_image_lang}}\n            <ion-icon name="cloud-download"></ion-icon>\n          </button>\n\n         \n        </ion-item>\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n            {{title_lang}} *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title"  placeholder="{{title_lang}} "></ion-input>\n        \n      </ion-item>\n      \n      <ion-item>\n        <ion-label  color="primary" stacked>{{type_lang}} *</ion-label>\n          <ion-select [(ngModel)]="loginData.type" placeholder="{{type_lang}} ">\n            <ion-option [selected]="loginData.type == 0" value="0">Private</ion-option>\n            <ion-option [selected]="loginData.type == 1"  value="1">Shared</ion-option>\n            <ion-option [selected]="loginData.type == 2"  value="2">Public</ion-option>\n          </ion-select>\n        </ion-item>\n\n      <ion-item>\n          <ion-icon name="password" ></ion-icon>\n          <ion-label  color="primary" stacked>\n              {{private_lang}} *\n          </ion-label>\n            <ion-textarea type="text" [(ngModel)]="loginData.private"  placeholder="{{private_lang}} "></ion-textarea>\n          \n        </ion-item>\n  \n        <ion-item>\n            <ion-icon name="person" ></ion-icon>\n            <ion-label   color="primary" stacked>\n                {{desc_lang}} *</ion-label>\n             \n              <ion-textarea  type="text" [(ngModel)]="loginData.desc" placeholder="{{desc_lang}} " rows="4"></ion-textarea >\n                \n          </ion-item>\n  \n\n\n\n            <button ion-button full (click)="save()">{{updates}}</button>\n            \n\n\n              \n  \n              <ion-item>\n\n              \n              </ion-item>\n              \n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wishlist-update\wishlist-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], WishlistUpdatePage);
    return WishlistUpdatePage;
}());

//# sourceMappingURL=wishlist-update.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_view_products_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ProductsPage } from '../products/products';



/**
 * Generated class for the ProductsUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsUpdatePage = /** @class */ (function () {
    function ProductsUpdatePage(databaseProvider, navCtrl, navParams, http, loadingCtrl, alertCtrl, events, camera) {
        var _this = this;
        this.databaseProvider = databaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.camera = camera;
        this.dev = [];
        this.devs = {};
        this.loginData = { name: '', info: '', buy: '', title: '', price: '', quan: '', were: '', rap: '' };
        this.result = [];
        events.subscribe('star-rating:changed', function (starRating) {
            console.log(starRating);
            _this.rating = starRating;
        });
        this.ids = navParams.get('id');
        this.getData();
    }
    ProductsUpdatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.create_prod = data['create_prod'];
                _this.image_eng = data['image'];
                _this.update_image_eng = data['update_image'];
                _this.link_eng = data['link'];
                _this.title_eng = data['title'];
                _this.name_eng = data['name'];
                _this.where_buy_eng = data['where_buy'];
                _this.price_eng = data['price'];
                _this.quantity_eng = data['quan'];
                _this.prod_cat_eng = data['prod_cat'];
                _this.desc_eng = data['description'];
                _this.rating_eng = data['rating'];
                _this.create_new_eng = data['create_new'];
                _this.fetch_eng = data['fetchs'];
                _this.updates = data['updates'];
            });
            _this.url_user = "http://api.givet.co.uk/api/get_cat_prod.php?prod_id=" + _this.ids;
            _this.data_user = _this.http.get(_this.url_user);
            _this.data_user.subscribe(function (data_user2) {
                if (data_user2['status'] == "400 OK") {
                    _this.loginData.rap = "0";
                }
                else {
                    _this.loginData.rap = data_user2['cat_id'];
                }
            });
        });
    };
    ProductsUpdatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ProductsUpdatePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.url = "http://api.givet.co.uk/api/info_product.php?fav_id=" + this.ids;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.loginData.name = data['name'];
            _this.loginData.info = data['details'];
            _this.rating = data['rating'];
            _this.loginData.title = data['title'];
            _this.loginData.price = data['price'];
            _this.loginData.quan = data['quan'];
            _this.loginData.buy = data['link'];
            _this.loginData.were = data['where_buy'];
            _this.image = data['image'];
            var person = "http";
            var personRegExp = new RegExp(person);
            if (personRegExp.test(_this.image)) {
                console.log(person + " is a philosopher.");
                _this.test_2 = '1';
            }
            else {
                console.log(person + " is NOT a philosopher.");
            }
            _this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id;
            _this.data_user = _this.http.get(_this.url_user);
            _this.data_user.subscribe(function (data_user) {
                _this.user_name = data_user['name'];
                _this.user_email = data_user['email'];
                _this.user_surename = data_user['surename'];
                _this.user_image = data_user['image'];
                var person = "http";
                var personRegExp = new RegExp(person);
                if (personRegExp.test(_this.user_image)) {
                    console.log(person + " is a philosopher.");
                    _this.test = '1';
                }
                else {
                    console.log(person + " is NOT a philosopher.");
                }
                _this.loading.dismiss();
                _this.loadDB();
            });
        });
    };
    ProductsUpdatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.search = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/fetch.php";
        var postData = new FormData();
        postData.append('url', this.loginData.buy);
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            //alert(JSON.stringify(data));
            _this.loginData.title = data['title'];
            _this.loginData.name = data['name'];
            _this.rating = data['stars'];
            _this.loginData.price = data['price'];
            _this.loginData.quan = "1";
            _this.loginData.were = data['where'];
            _this.loginData.info = data['description'];
            _this.base64Image = data['image'].trim();
            var names = data['image'].split("data:image/jpeg;base64,");
            //let firstName = names[0];
            _this.picture_new = names;
            _this.res_image = 1;
            _this.loading.dismiss();
        });
    };
    ProductsUpdatePage.prototype.clickOption = function (id) {
        this.new_cout = id;
    };
    ProductsUpdatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.title.length <= 0) {
            this.loading.dismiss();
            this.presentAlertTitle();
        }
        else if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.info.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.price.length <= 0) {
            this.loading.dismiss();
            this.presentAlertPrice();
        }
        else if (this.loginData.quan.length <= 0) {
            this.loading.dismiss();
            this.presentAlertQuan();
        }
        else if (this.loginData.were.length <= 0) {
            this.loading.dismiss();
            this.presentAlertWere();
        }
        else if (this.loginData.buy.length <= 0) {
            this.loading.dismiss();
            this.presentAlertBuy();
        }
        else if (this.loginData.rap.length <= 0) {
            this.loading.dismiss();
            this.presentAlertRap();
        }
        else {
            this.url = "http://api.givet.co.uk/api/update_product.php";
            var postData = new FormData();
            postData.append('fav_id', this.ids);
            postData.append('title', this.loginData.title);
            postData.append('name', this.loginData.name);
            postData.append('rating', this.rating);
            postData.append('link', this.loginData.buy);
            postData.append('price', this.loginData.price);
            postData.append('quatnity', this.loginData.quan);
            postData.append('where_buy', this.loginData.were);
            postData.append('info', this.loginData.info);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                if (_this.picture_new != null) {
                    _this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                    var postData_1 = new FormData();
                    postData_1.append('img', _this.picture_new);
                    postData_1.append('user_id', _this.ids);
                    postData_1.append('image_name', 'prod_image.jpg');
                    postData_1.append('type', 'fav');
                    _this.data = _this.http.post(_this.url, postData_1);
                    _this.data.subscribe(function (data) {
                        if (_this.new_cout > 0) {
                            _this.url = "http://api.givet.co.uk/api/update_prod_cat.php";
                            var postData_2 = new FormData();
                            postData_2.append('prod_id', _this.ids);
                            postData_2.append('cat_id', _this.new_cout);
                            _this.data = _this.http.post(_this.url, postData_2);
                            _this.data.subscribe(function (data) {
                                _this.loading.dismiss();
                                if (data['status'] == "200 OK") {
                                    _this.loading.dismiss();
                                    //this.navCtrl.pop();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__products_view_products_view__["a" /* ProductsViewPage */], { reset: 1, id: _this.ids });
                                }
                                else {
                                    _this.loading.dismiss();
                                    _this.presentError();
                                }
                            });
                        }
                        else {
                            _this.loading.dismiss();
                            //this.navCtrl.pop();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__products_view_products_view__["a" /* ProductsViewPage */], { reset: 1, id: _this.ids });
                        }
                        _this.loading.dismiss();
                        //this.navCtrl.pop();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__products_view_products_view__["a" /* ProductsViewPage */], { reset: 1, id: _this.ids });
                    });
                    console.log(_this.loginData);
                    console.log(data);
                }
                else if (_this.new_cout > 0) {
                    _this.url = "http://api.givet.co.uk/api/update_prod_cat.php";
                    var postData_3 = new FormData();
                    postData_3.append('prod_id', _this.ids);
                    postData_3.append('cat_id', _this.new_cout);
                    _this.data = _this.http.post(_this.url, postData_3);
                    _this.data.subscribe(function (data) {
                        _this.loading.dismiss();
                        if (data['status'] == "200 OK") {
                            _this.loading.dismiss();
                            //this.navCtrl.pop();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__products_view_products_view__["a" /* ProductsViewPage */], { reset: 1, id: _this.ids });
                        }
                        else {
                            _this.loading.dismiss();
                            _this.presentError();
                        }
                    });
                }
                else {
                    _this.loading.dismiss();
                    //this.navCtrl.pop();
                }
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__products_view_products_view__["a" /* ProductsViewPage */], { reset: 1, id: _this.ids });
            });
        }
    };
    ProductsUpdatePage.prototype.presentAlertRap = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Product category.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentAlertWere = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Where Buy.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentAlertBuy = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Link.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentAlertPrice = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Price.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentAlertQuan = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Quantity.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentAlertTitle = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Title.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    ProductsUpdatePage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.res_image = 1;
        }, function (err) {
            // Handle error
        });
    };
    ProductsUpdatePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.res_image = 1;
        }, function (err) {
            // Handle error
        });
    };
    ProductsUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products-update',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products-update\products-update.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>{{loginData.name}}</ion-title>\n      \n    \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    \n  \n    <ion-list >   \n            \n        <div text-center style="\n        background-color: #fff;">\n\n      <img *ngIf=" test != null && res_image ==null" src="{{image}}">\n      <img  *ngIf=" test == null && res_image ==null" src="https://givet.co.uk/backend/web/images/{{image}}">\n      <img  *ngIf="res_image !=null" src = "{{base64Image}}"/>\n\n    </div>\n\n      <ion-item>\n      <button ion-button icon-end (click)="openModal()">\n          {{update_image_eng}}\n          <ion-icon name="cloud-download"></ion-icon>\n        </button>\n      </ion-item>\n\n          <ion-item>\n              <ion-icon name="ios-person" ></ion-icon>\n              <ion-label  color="primary" stacked>\n                  {{link_eng}} *\n              </ion-label>\n                <ion-input type="text" [(ngModel)]="loginData.buy"  placeholder="{{link_eng}}"></ion-input>\n             \n            \n            </ion-item>\n\n            <ion-item>\n              <button ion-button style="background-color: darkcyan;color: cornsilk" (click)="search()">{{fetch_eng}}</button>\n    \n            </ion-item>\n\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n            {{title_eng}} *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title"  placeholder="{{title_eng}} "></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="ios-person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n              {{name_eng}} *\n            </ion-label>\n           \n            <ion-input type="text" [(ngModel)]="loginData.name"  placeholder="{{name_eng}} "></ion-input>\n          \n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="ios-person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n              {{where_buy_eng}}  *</ion-label>\n            <ion-input type="text" [(ngModel)]="loginData.were" placeholder="{{where_buy_eng}}"></ion-input>\n        \n        </ion-item>\n\n\n        <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n                {{price_eng}} *\n            </ion-label>\n              <ion-input type="text" [(ngModel)]="loginData.price"   placeholder="{{price_eng}} "></ion-input>\n           \n          </ion-item>\n\n\n\n      <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n                {{quantity_eng}} *\n            </ion-label>\n              <ion-input type="number" [(ngModel)]="loginData.quan"  placeholder="{{quantity_eng}} "></ion-input>\n            \n          </ion-item>\n\n\n          <ion-item *ngIf="loginData.rap ==0">\n            <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n              <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                <ion-option   [value]="9" (ionSelect)="clickOption(9)" >For Her</ion-option>\n                <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                <ion-option   [value]="11" (ionSelect)="clickOption(11)" >For Girls</ion-option>\n                <ion-option   [value]="12" (ionSelect)="clickOption(12)">Arts and Crafts</ion-option>\n                <ion-option   [value]="13"(ionSelect)="clickOption(13)" >Bridal Party</ion-option>\n                <ion-option   [value]="14" (ionSelect)="clickOption(14)" >Collectibles</ion-option>\n              </ion-select>\n            </ion-item>\n\n          <ion-item *ngIf="loginData.rap ==8">\n              <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n                <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                  <ion-option   [value]="8" (ionSelect)="clickOption(8)" selected>For Him</ion-option>\n                  <ion-option   [value]="9" (ionSelect)="clickOption(9)" >For Her</ion-option>\n                  <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                  <ion-option   [value]="11" (ionSelect)="clickOption(11)" >For Girls</ion-option>\n                  <ion-option   [value]="12" (ionSelect)="clickOption(12)">Arts and Crafts</ion-option>\n                  <ion-option   [value]="13"(ionSelect)="clickOption(13)" >Bridal Party</ion-option>\n                  <ion-option   [value]="14" (ionSelect)="clickOption(14)" >Collectibles</ion-option>\n                </ion-select>\n              </ion-item>\n\n\n              <ion-item *ngIf="loginData.rap ==9">\n                <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n                  <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                    <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                    <ion-option   [value]="9" (ionSelect)="clickOption(9)" selected>For Her</ion-option>\n                    <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                    <ion-option   [value]="11" (ionSelect)="clickOption(11)" >For Girls</ion-option>\n                    <ion-option   [value]="12" (ionSelect)="clickOption(12)" >Arts and Crafts</ion-option>\n                    <ion-option   [value]="13"(ionSelect)="clickOption(13)" >Bridal Party</ion-option>\n                    <ion-option   [value]="14" (ionSelect)="clickOption(14)" >Collectibles</ion-option>\n                  </ion-select>\n                </ion-item>\n\n                \n              <ion-item *ngIf="loginData.rap ==10">\n                <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n                  <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                    <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                    <ion-option   [value]="9" (ionSelect)="clickOption(9)" >For Her</ion-option>\n                    <ion-option   [value]="10"(ionSelect)="clickOption(10)" selected>For Boys</ion-option>\n                    <ion-option   [value]="11" (ionSelect)="clickOption(11)">For Girls</ion-option>\n                    <ion-option   [value]="12" (ionSelect)="clickOption(12)" >Arts and Crafts</ion-option>\n                    <ion-option   [value]="13"(ionSelect)="clickOption(13)" >Bridal Party</ion-option>\n                    <ion-option   [value]="14" (ionSelect)="clickOption(14)" >Collectibles</ion-option>\n                  </ion-select>\n                </ion-item>\n\n                <ion-item *ngIf="loginData.rap ==11">\n                    <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n                      <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                        <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                        <ion-option   [value]="9" (ionSelect)="clickOption(9)" >For Her</ion-option>\n                        <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                        <ion-option   [value]="11" (ionSelect)="clickOption(11)" selected>For Girls</ion-option>\n                        <ion-option   [value]="12" (ionSelect)="clickOption(12)" >Arts and Crafts</ion-option>\n                        <ion-option   [value]="13"(ionSelect)="clickOption(13)" >Bridal Party</ion-option>\n                        <ion-option   [value]="14" (ionSelect)="clickOption(14)" >Collectibles</ion-option>\n                      </ion-select>\n                    </ion-item>\n\n\n                    \n                <ion-item *ngIf="loginData.rap ==12">\n                    <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n                      <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                        <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                        <ion-option   [value]="9" (ionSelect)="clickOption(9)" >For Her</ion-option>\n                        <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                        <ion-option   [value]="11" (ionSelect)="clickOption(11)" >For Girls</ion-option>\n                        <ion-option   [value]="12" (ionSelect)="clickOption(12)" selected>Arts and Crafts</ion-option>\n                        <ion-option   [value]="13"(ionSelect)="clickOption(13)" >Bridal Party</ion-option>\n                        <ion-option   [value]="14" (ionSelect)="clickOption(14)" >Collectibles</ion-option>\n                      </ion-select>\n                    </ion-item>\n\n                    <ion-item *ngIf="loginData.rap ==13">\n                        <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n                          <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                            <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                            <ion-option   [value]="9" (ionSelect)="clickOption(9)" >For Her</ion-option>\n                            <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                            <ion-option   [value]="11" (ionSelect)="clickOption(11)" >For Girls</ion-option>\n                            <ion-option   [value]="12" (ionSelect)="clickOption(12)" >Arts and Crafts</ion-option>\n                            <ion-option   [value]="13"(ionSelect)="clickOption(13)" selected>Bridal Party</ion-option>\n                            <ion-option   [value]="14" (ionSelect)="clickOption(14)" >Collectibles</ion-option>\n                          </ion-select>\n                        </ion-item>\n         \n  \n                        <ion-item *ngIf="loginData.rap ==14">\n                            <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n                              <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *">\n                                <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                                <ion-option   [value]="9" (ionSelect)="clickOption(9)" >For Her</ion-option>\n                                <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                                <ion-option   [value]="11" (ionSelect)="clickOption(11)" >For Girls</ion-option>\n                                <ion-option   [value]="12" (ionSelect)="clickOption(12)" >Arts and Crafts</ion-option>\n                                <ion-option   [value]="13"(ionSelect)="clickOption(13)">Bridal Party</ion-option>\n                                <ion-option   [value]="14" (ionSelect)="clickOption(14)" selected>Collectibles</ion-option>\n                              </ion-select>\n                            </ion-item>\n         \n                            \n              <ion-item>\n                  <ion-icon name="person" ></ion-icon>\n                  <ion-label   color="primary" stacked>\n                    {{desc_eng}} *</ion-label>\n                 \n                    <ion-textarea  type="text"  [(ngModel)]="loginData.info" placeholder="Description " rows="4"></ion-textarea >\n                      \n                    \n                </ion-item>\n\n\n\n\n        <ion-item>\n          <p  style="color:#488aff;">\n              {{rating_eng}} *\n          </p>\n          <ionic3-star-rating  *ngIf=" rating == \'0\'"\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "orange" \n          defaultColor = "grey"\n          readonly="false"\n          [rating]="0">\n      </ionic3-star-rating>\n      <ionic3-star-rating  *ngIf=" rating == \'1\'"\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "orange" \n          defaultColor = "grey"\n          readonly="false"\n          [rating]="1">\n      </ionic3-star-rating>\n      <ionic3-star-rating  *ngIf=" rating == \'2\'"\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "orange" \n          defaultColor = "grey"\n          readonly="false"\n          [rating]="2">\n      </ionic3-star-rating>\n      <ionic3-star-rating  *ngIf=" rating == \'3\'"\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "orange" \n          defaultColor = "grey"\n          readonly="false"\n          [rating]="3">\n      </ionic3-star-rating>\n      <ionic3-star-rating  *ngIf=" rating == \'4\'"\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "orange" \n          defaultColor = "grey"\n          readonly="false"\n          [rating]="4">\n      </ionic3-star-rating>\n      <ionic3-star-rating  *ngIf=" rating == \'5\'"\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "orange" \n          defaultColor = "grey"\n          readonly="false"\n          [rating]="5">\n      </ionic3-star-rating>\n      </ion-item>\n  \n\n\n        <button ion-button full style="margin: 0px;"(click)="save()">{{updates}}</button>\n\n      \n              \n\n              <ion-item>\n\n              \n            </ion-item>\n  \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products-update\products-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], ProductsUpdatePage);
    return ProductsUpdatePage;
}());

//# sourceMappingURL=products-update.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_groups__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GroupsUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsUpdatePage = /** @class */ (function () {
    function GroupsUpdatePage(databaseProvider, navCtrl, navParams, http, alertCtrl, loadingCtrl, camera) {
        this.databaseProvider = databaseProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.dev = [];
        this.items_users = [];
        this.result = [];
        this.loginData = { name: '', desc: '', type: '' };
        this.ids = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/info_group.php?group_id=" + this.ids;
        this.getData();
    }
    GroupsUpdatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['name'];
                _this.desc = data['description'];
                _this.upload_image_langs = data['update_image'];
            });
        });
    };
    GroupsUpdatePage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    GroupsUpdatePage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
            var postData = new FormData();
            postData.append('img', imageData);
            postData.append('user_id', _this.ids);
            postData.append('image_name', 'group_image.jpg');
            postData.append('type', 'group');
            _this.data = _this.http.post(url, postData);
            _this.data.subscribe(function (data) {
                _this.loading.dismiss();
            });
            _this.res_image = '1';
        }, function (err) {
            // Handle error
        });
    };
    GroupsUpdatePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
            var postData = new FormData();
            postData.append('img', imageData);
            postData.append('user_id', _this.ids);
            postData.append('image_name', 'group_image.jpg');
            postData.append('type', 'group');
            _this.data = _this.http.post(url, postData);
            _this.data.subscribe(function (data) {
                _this.loading.dismiss();
            });
            _this.res_image = '1';
        }, function (err) {
            // Handle error
        });
    };
    GroupsUpdatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GroupsUpdatePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.loginData.name = data['name'];
            _this.loginData.desc = data['description'];
            _this.image = data['image'];
            _this.loginData.type = data['type'];
            _this.loading.dismiss();
            _this.loadDB();
        });
        this.loading.dismiss();
    };
    GroupsUpdatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.desc.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.type.length <= 0) {
            this.loading.dismiss();
            this.presentAlertType();
        }
        else {
            var url = "http://api.givet.co.uk/api/edit_group.php";
            var postData = new FormData();
            postData.append('group_id', this.ids);
            postData.append('name', this.loginData.name);
            postData.append('description', this.loginData.desc);
            postData.append('type', this.loginData.type);
            this.data_post = this.http.post(url, postData);
            this.data_post.subscribe(function (data) {
                if (data['group']['status'] == "200 OK") {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__groups_groups__["a" /* GroupsPage */], { reset: 1 });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(data);
            });
        }
        this.loading.dismiss();
    };
    GroupsUpdatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsUpdatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsUpdatePage.prototype.presentAlertPrivate = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Private.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsUpdatePage.prototype.presentAlertType = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Type.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsUpdatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsUpdatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-groups-update',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups-update\groups-update.html"*/'<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>{{loginData.name}}</ion-title>\n\n    \n  </ion-navbar>\n\n</ion-header>\n  \n  <ion-content style="\n  background-color: #fff;">\n    \n  \n    <ion-list >   \n\n\n\n      <div text-center style="\n      background-color: #fff;">\n            <img class="goga" *ngIf=" test != null && res_image ==null" src="{{image}}">\n          <img class="goga" *ngIf=" test == null && res_image ==null" src="https://givet.co.uk/backend/web/images/{{image}}">\n          <img class="goga" *ngIf="res_image !=null" src = "{{base64Image}}"/>\n        </div>\n\n        <ion-item>\n              <button  ion-button icon-end (click)="openModal()">\n                  {{upload_image_langs}}\n                  <ion-icon name="cloud-download"></ion-icon>\n                </button>\n\n              </ion-item>\n \n         \n              <ion-item>\n                  <ion-icon name="ios-person" ></ion-icon>\n                  <ion-label  color="primary" stacked>\n                    {{lang}} *\n                  </ion-label>\n              \n                    <ion-input type="text"  [(ngModel)]="loginData.name"  placeholder="{{lang}} "></ion-input>\n                \n                </ion-item>\n\n                <ion-item>\n                    <ion-icon name="person" ></ion-icon>\n                    <ion-label  color="primary" stacked>\n                      {{desc}} *\n                    </ion-label>\n                      <ion-textarea  type="text"  [(ngModel)]="loginData.desc" placeholder="{{desc}} " rows="4"></ion-textarea >\n                    \n                  </ion-item>\n        \n          \n\n              <ion-item>\n                <ion-label  color="primary" stacked>Type *</ion-label>\n                  <ion-select [(ngModel)]="loginData.type" placeholder="Type ">\n                    <ion-option [selected]="loginData.type == 0" value="0">Public</ion-option>\n                    <ion-option [selected]="loginData.type == 1" value="1">Private</ion-option>\n                    \n                  </ion-select>\n                </ion-item>\n  \n         \n\n                  <button ion-button full (click)="save()">Update</button>\n                  \n             \n  \n              \n\n              <ion-item>\n\n              \n              </ion-item>\n  \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups-update\groups-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], GroupsUpdatePage);
    return GroupsUpdatePage;
}());

//# sourceMappingURL=groups-update.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GroupsCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsCreatePage = /** @class */ (function () {
    function GroupsCreatePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, camera, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.result = [];
        this.loginData = { name: '', desc: '', type: '' };
        this.loadDB();
    }
    GroupsCreatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GroupsCreatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['name'];
                _this.desc = data['description'];
                _this.image_langs = data['image'];
                _this.upload_image_langs = data['update_image'];
            });
        });
    };
    GroupsCreatePage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    GroupsCreatePage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            /*this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
             let postData = new FormData();
             postData.append('img',imageData);
            // postData.append('user_id',this.ids);
             postData.append('image_name','group_image.jpg');
             postData.append('type','group');
             this.data = this.http.post(url,postData);
         
             this.data.subscribe(data =>{
               this.loading.dismiss();
         
             });*/
            //this.res_image = '1';
        }, function (err) {
            // Handle error
        });
    };
    GroupsCreatePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            /*this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
             let postData = new FormData();
             postData.append('img',imageData);
             //postData.append('user_id',this.ids);
             postData.append('image_name','group_image.jpg');
             postData.append('type','group');
             this.data = this.http.post(url,postData);
         
             this.data.subscribe(data =>{
               this.loading.dismiss();
         
             });*/
            // this.res_image = '1';
        }, function (err) {
            // Handle error
        });
    };
    GroupsCreatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.desc.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.type.length <= 0) {
            this.loading.dismiss();
            this.presentAlertType();
        }
        else {
            var url = "http://api.givet.co.uk/api/create_group.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('name', this.loginData.name);
            postData.append('description', this.loginData.desc);
            postData.append('type', this.loginData.type);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                if (data['max(id)'] != null) {
                    _this.presentLoadingDefault();
                    var url = "http://api.givet.co.uk/api/set_profile_image.php";
                    var postData_1 = new FormData();
                    postData_1.append('img', _this.picture_new);
                    postData_1.append('user_id', data['max(id)']);
                    postData_1.append('image_name', 'group_image.jpg');
                    postData_1.append('type', 'group');
                    _this.data = _this.http.post(url, postData_1);
                    _this.data.subscribe(function (data) {
                        _this.loading.dismiss();
                        _this.navCtrl.pop();
                    });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(data);
            });
        }
        this.loading.dismiss();
    };
    GroupsCreatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsCreatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsCreatePage.prototype.presentAlertPrivate = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Private.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsCreatePage.prototype.presentAlertType = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Type.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsCreatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsCreatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    GroupsCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-groups-create',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups-create\groups-create.html"*/'<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>Create Group</ion-title>\n\n    \n  </ion-navbar>\n\n</ion-header>\n  \n  <ion-content >\n    \n  \n    <ion-list style="background-color: #fff;">   \n\n        <img  src = "{{base64Image}}"/>\n\n        <ion-item>\n            <ion-icon name="person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n              {{image_langs}}\n            </ion-label>\n            \n          </ion-item>\n\n          <ion-item>\n            \n              <button  ion-button icon-end (click)="openModal()">\n                  {{upload_image_langs}}\n                  <ion-icon name="cloud-download"></ion-icon>\n                </button>\n\n              </ion-item>\n \n              <ion-item>\n                  <ion-icon name="ios-person" ></ion-icon>\n                  <ion-label  color="primary" stacked>\n                    {{lang}} *\n                  </ion-label>\n              \n                    <ion-input type="text"  [(ngModel)]="loginData.name"  placeholder="{{lang}} "></ion-input>\n                \n                </ion-item>\n\n                <ion-item>\n                    <ion-icon name="person" ></ion-icon>\n                    <ion-label  color="primary" stacked>\n                      {{desc}} *\n                    </ion-label>\n                      <ion-textarea  type="text"  [(ngModel)]="loginData.desc" placeholder="{{desc}} " rows="4"></ion-textarea >\n                    \n                  </ion-item>\n        \n  \n              <ion-item>\n                <ion-label  color="primary"  stacked>Type *</ion-label>\n                  <ion-select [(ngModel)]="loginData.type" placeholder="Type ">\n                    <ion-option value="0">Public</ion-option>\n                    <ion-option value="1">Private</ion-option>\n                    \n                  </ion-select>\n                </ion-item>\n  \n          \n\n                  <button ion-button full (click)="save()">Create</button>\n                  \n          \n  \n              \n\n              <ion-item>\n\n              \n              </ion-item>\n  \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\groups-create\groups-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], GroupsCreatePage);
    return GroupsCreatePage;
}());

//# sourceMappingURL=groups-create.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorite_view_favorite_view__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MyListsPage } from '../my-lists/my-lists';


/**
 * Generated class for the FavoriteUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoriteUpdatePage = /** @class */ (function () {
    function FavoriteUpdatePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, events, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.result = [];
        this.loginData = { name: '', info: '' };
        this.ids = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/info_fav.php?fav_id=" + this.ids;
        this.getData();
    }
    FavoriteUpdatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['name'];
                _this.desc = data['description'];
                _this.updates = data['updates'];
            });
        });
    };
    FavoriteUpdatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FavoriteUpdatePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.loginData.name = data['name'];
            _this.type = data['type'];
            _this.loginData.info = data['info'];
            _this.loading.dismiss();
            _this.loadDB();
        });
        this.loading.dismiss();
    };
    FavoriteUpdatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.info.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else {
            var url = "http://api.givet.co.uk/api/edit_fav.php";
            var postData = new FormData();
            postData.append('fav_id', this.ids);
            postData.append('name', this.loginData.name);
            postData.append('type', '1');
            postData.append('info', this.loginData.info);
            this.data_post = this.http.post(url, postData);
            this.data_post.subscribe(function (data) {
                if (data['favorite']['status'] == "200 OK") {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__favorite_view_favorite_view__["a" /* FavoriteViewPage */], { id: _this.ids });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(data);
            });
        }
        this.loading.dismiss();
    };
    FavoriteUpdatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteUpdatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteUpdatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteUpdatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favorite-update',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\favorite-update\favorite-update.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>{{loginData.name}}</ion-title>\n      \n    \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    \n  \n      <ion-list >   \n   \n\n          <ion-item>\n              <ion-icon name="ios-person" ></ion-icon>\n              <ion-label  color="primary" stacked>\n                {{lang}} *\n              </ion-label>\n          \n                <ion-input type="text"  [(ngModel)]="loginData.name"  placeholder="{{lang}} "></ion-input>\n            \n            </ion-item>\n    \n            <ion-item>\n                <ion-icon name="person" ></ion-icon>\n                <ion-label  color="primary" stacked>\n                  {{desc}} *\n                </ion-label>\n                  <ion-textarea  type="text"  [(ngModel)]="loginData.info" placeholder="{{desc}} " rows="4"></ion-textarea >\n                \n              </ion-item>\n  \n\n         \n\n                <button ion-button full (click)="save()">{{updates}}</button>\n        \n        \n    \n                \n\n                <ion-item>\n\n              \n                </ion-item>\n    \n      </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\favorite-update\favorite-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], FavoriteUpdatePage);
    return FavoriteUpdatePage;
}());

//# sourceMappingURL=favorite-update.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_lists_my_lists__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FavoriteCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoriteCreatePage = /** @class */ (function () {
    function FavoriteCreatePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, events, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.databaseProvider = databaseProvider;
        this.result = [];
        this.loginData = { name: '', info: '' };
        this.dev = [];
        this.devs = {};
        this.loadDB();
    }
    FavoriteCreatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['name'];
                _this.desc = data['description'];
            });
        });
    };
    FavoriteCreatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FavoriteCreatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.info.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else {
            var url = "http://api.givet.co.uk/api/create_fav.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('name', this.loginData.name);
            postData.append('type', '1');
            postData.append('info', this.loginData.info);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                if (data['max(id)'] != null) {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__my_lists_my_lists__["a" /* MyListsPage */], { reset: 1 });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(data);
            });
        }
        this.loading.dismiss();
    };
    FavoriteCreatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteCreatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteCreatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteCreatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favorite-create',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\favorite-create\favorite-create.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Create</ion-title>\n      \n    \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    \n  \n    <ion-list >   \n   \n\n        <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n              {{lang}} *\n            </ion-label>\n        \n              <ion-input type="text"  [(ngModel)]="loginData.name"  placeholder="{{lang}} "></ion-input>\n          \n          </ion-item>\n  \n          <ion-item>\n              <ion-icon name="person" ></ion-icon>\n              <ion-label  color="primary" stacked>\n                {{desc}} *\n              </ion-label>\n                <ion-textarea  type="text"  [(ngModel)]="loginData.info" placeholder="{{desc}} " rows="4"></ion-textarea >\n              \n            </ion-item>\n\n         \n\n              <button ion-button full (click)="save()">Create</button>\n              \n          \n            \n  \n          \n  \n              <ion-item>\n\n              \n              </ion-item>\n              \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\favorite-create\favorite-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], FavoriteCreatePage);
    return FavoriteCreatePage;
}());

//# sourceMappingURL=favorite-create.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_view_events_view__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SelectEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectEventPage = /** @class */ (function () {
    function SelectEventPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.items_dota = [];
        this.search = [];
        this.searchBar = false;
        this.other_id = navParams.get('event_id');
        this.loadDB();
    }
    SelectEventPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_select_wish.php?fav_title=" + this.queryText + "&event_id=" + this.other_id + "&user_id=" + this.user_id_2;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items_dota = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items_dota = null;
                }
            });
        }
    };
    SelectEventPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/get_wish_for_event.php?event_id=" + this.other_id + "&user_id=" + this.user_id_2;
        this.getData();
    };
    SelectEventPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.select_wish = data['select_wish'];
                _this.create_new = data['create_new'];
                _this.add_lang = data['adds'];
            });
            _this.url = "http://api.givet.co.uk/api/get_wish_for_event.php?event_id=" + _this.other_id + "&user_id=" + _this.user_id_2;
            _this.getData();
        });
    };
    SelectEventPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SelectEventPage.prototype.updateCucumber = function (item) {
        var _this = this;
        this.url = "http://api.givet.co.uk/api/insert_prod_in_cache.php?user_id=" + this.user_id_2 + "&prod_id=" + item['id'];
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
    };
    SelectEventPage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.url = "http://api.givet.co.uk/api/select_cache.php?user_id=" + this.user_id_2;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
            if (data != null) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var god = data_1[_i];
                    var url2 = "http://api.givet.co.uk/api/add_wish_to_event.php";
                    var postData = new FormData();
                    postData.append('event_id', _this.other_id);
                    postData.append('wish_id', god['prod_id']);
                    _this.data2 = _this.http.post(url2, postData);
                    _this.data2.subscribe(function (data) {
                    });
                }
                _this.url = "http://api.givet.co.uk/api/delete_cache.php?user_id=" + _this.user_id_2;
                _this.data = _this.http.get(_this.url);
                _this.data.subscribe(function (data) {
                    _this.items = data;
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__events_view_events_view__["a" /* EventsViewPage */], { id: _this.other_id });
                });
            }
            else {
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */], {
                    reset: 1
                });
            }
        });
        this.loading.dismiss();
    };
    SelectEventPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items_dota = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items_dota = null;
            }
            _this.loading.dismiss();
        });
        // this.loading.dismiss();
    };
    SelectEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-event',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\select-event\select-event.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!searchBar">{{select_wish}}</ion-title>\n  \n     \n      <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n      (ionInput)="updateText($event)"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n\n  <ion-content>\n  \n    \n  \n      \n      <ion-list *ngIf="items_dota == null" text-center>\n\n    \n          <button *ngIf="items_dota == null" (click)="moToCreate()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new}}</button>\n        </ion-list>\n  \n        \n       \n    <ion-list *ngFor="let item of items_dota">\n\n        <ion-col   no-padding>\n  \n            <ion-card>\n                \n                <ion-item>\n                    <ion-label>{{item.title}}</ion-label>\n                    <ion-checkbox  (ionChange)="updateCucumber(item)" ></ion-checkbox>\n                </ion-item>\n\n                <ion-card-header class="bot-pd" [innerHtml]="item.title">\n               \n              \n                </ion-card-header>\n  \n                <ion-card-header class="no-mg">\n          \n                    <span *ngIf=" item.type == \'0\'" class="label label-danger">                  \n                        Private</span> \n                        <span *ngIf=" item.type == \'1\'" class="label label-warning">                  \n                            Shared</span> \n                            <span *ngIf=" item.type == \'2\'" class="label label-success">                  \n                                Public</span> \n                    \n                  </ion-card-header>\n                \n              \n                <ion-card-content [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') ">\n  \n                  \n              \n                </ion-card-content>\n              \n              </ion-card>\n  \n        </ion-col>\n      \n    </ion-list>\n\n\n  \n  </ion-content>\n  \n\n  <ion-footer align-title="center" class="bar-balanced" style="background-color: transparent">\n    <button ion-button full style="margin:0px;padding: 0px;background-color: green"(click)="save()">{{add_lang}}</button>\n  </ion-footer>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\select-event\select-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], SelectEventPage);
    return SelectEventPage;
}());

//# sourceMappingURL=select-event.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = /** @class */ (function () {
    function FriendsPage(navCtrl, modalCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.items = [];
        this.searchBar = false;
        this.ids = navParams.get('id');
        //this.loadDB();
    }
    FriendsPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    FriendsPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['friend'];
            });
            _this.url = "http://api.givet.co.uk/api/my_friend.php?user_id=" + _this.user_id;
            _this.getData();
        });
    };
    FriendsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FriendsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.loadDB();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FriendsPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_friend.php?user_id=" + this.user_id + "&email=" + this.queryText;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    FriendsPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.loadDB();
    };
    FriendsPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else {
                _this.items = null;
            }
            _this.loading.dismiss();
        });
    };
    FriendsPage.prototype.openModal = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: item['id']
        });
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\friends\friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!searchBar">{{lang}}</ion-title>\n  \n\n    \n    <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n    (ionInput)="updateText($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n      <ion-icon name="search"></ion-icon>\n    </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingText="Pull to refresh..."\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n\n      <ion-list *ngIf="items==null" text-center>\n\n        <p>You have no friends :(</p>\n      </ion-list>\n\n    <ion-list *ngIf="items!=null">\n\n        <ion-col *ngFor="let item of items"  no-padding>\n\n        <ion-card (click)="openModal(item)">\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img *ngIf="item.image != null" src="https://givet.co.uk/backend/web/images/users/{{item.image}}">\n                <img *ngIf="item.image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n              </ion-avatar>\n              <button ion-button icon-start clear item-end>\n                  \n                </button>\n                \n              <h2>{{item.name}} {{item.surename}}</h2>\n              <div *ngIf="item.status == \'1\'">\n              <p>{{item.email}}</p>\n              <p>{{item.bithday}}</p>\n              <p>{{item.phone}}</p>\n\n            </div>\n\n\n            <div *ngIf="item.status == \'2\'">\n              <button  ion-button style="background-color: #f39c12" >request to you</button>\n\n            </div>\n              \n            </ion-item>\n           \n          \n\n            </ion-card>\n\n          </ion-col>\n    </ion-list >\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\friends\friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetPage = /** @class */ (function () {
    function ForgetPage(navCtrl, navParams, fb, toast, loadingCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.forgetData = { email: '' };
        this.authForm = this.fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        //this.email = this.authForm.controls['email'];
    }
    ForgetPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ForgetPage.prototype.forgetPassword = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.forgetData.email.length <= 0) {
            this.loading.dismiss();
            this.presentErrorTwo();
        }
        else {
            var url = "http://api.givet.co.uk/api/forget.php";
            var postData = new FormData();
            postData.append('email', this.forgetData.email);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                if (data['user']['status'] == "200 OK") {
                    _this.loading.dismiss();
                    _this.presentInfo();
                    _this.moveToLogin();
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(data);
            });
        }
    };
    ForgetPage.prototype.moveToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ForgetPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'This user not register.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ForgetPage.prototype.presentErrorTwo = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Field is empty.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ForgetPage.prototype.presentInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: 'Your new password , send on you email',
            buttons: ['Ok']
        });
        alert.present();
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\forget\forget.html"*/'\n\n<ion-content class="bg-img">\n  <div class="main-content">\n    <div padding text-center class="container-logo" margin-bottom >\n      <img src="assets/imgs/logo.png">\n    </div>\n    <div padding text-center class="form-bottom-text">\n      <h3> Reset Password</h3>\n      <label>Enter the email address associated with your account,and review your email.</label>\n    </div>\n    <div text-center class="socialLogin" padding></div>\n      <div padding style="width: 100%;">\n      \n\n\n        <ion-list>\n          <ion-item >\n            <ion-label><ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="forgetData.email" id="email" type="email" required placeholder="Email *"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button type="submit" ion-button full color="dark" (click)="forgetPassword()">Send</button>\n  \n\n      <div padding text-center class="form-bottom-text">\n        <label>\n          <a href="javascript:void(0);" (click)="moveToLogin()">Back to Login</a>\n        </label>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterPage = /** @class */ (function () {
    function RegisterPage(platform, actionSheetCtrl, toastCtrl, fb, navCtrl, navParams, http, loadingCtrl, alertCtrl, databaseProvider) {
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.databaseProvider = databaseProvider;
        this.regData = { name: '', mail: '', pass: '', cnfpass: '', date: '', fn: '', ln: '' };
        this.passwordtype = 'password';
        this.cnfpasswordtype = 'password';
        this.cnfpasseye = 'eye';
        this.passeye = 'eye';
        this.result = [];
        this.dev = [];
        this.devs = {};
        this.authForm = this.fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'cnfpass': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'first_nameCrt': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'last_nameCrt': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'dateCrt': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.username = this.authForm.controls['username'];
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
        this.cnfpass = this.authForm.controls['cnfpass'];
        this.first_nameCrt = this.authForm.controls['first_nameCrt'];
        this.last_nameCrt = this.authForm.controls['last_nameCrt'];
        this.dateCrt = this.authForm.controls['dateCrt'];
    }
    RegisterPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
        });
    };
    RegisterPage.prototype.addUserSoc = function (fp_id, user_id, auth_token_tw, oauth_token_secret_tw, user_id_soc_tw) {
        var _this = this;
        this.databaseProvider.deleteDrop();
        this.databaseProvider.addDeveloperSoc(fp_id, user_id, auth_token_tw, oauth_token_secret_tw, user_id_soc_tw).then(function (data) {
            _this.loadDB();
        });
        this.devs = {};
    };
    RegisterPage.prototype.addUser = function (fp_id, user_id) {
        var _this = this;
        this.databaseProvider.deleteDrop();
        this.databaseProvider.addDeveloper(fp_id, user_id).then(function (data) {
            _this.loadDB();
        });
        this.devs = {};
    };
    RegisterPage.prototype.socialLoginFB = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
                //alert(JSON.stringify(result['user']['email']));   //email
                //alert(JSON.stringify(result['additionalUserInfo']['profile']['name'])); //name
                //alert(JSON.stringify(result['user]['photoURL])); //image
                var url = "http://api.givet.co.uk/api/register_social.php";
                var postData = new FormData();
                postData.append('username', result['user']['email']);
                postData.append('type', '0');
                postData.append('first_name', result['user']['displayName']);
                postData.append('img', result['user']['photoURL']);
                _this.data = _this.http.post(url, postData);
                _this.data.subscribe(function (data) {
                    //alert(JSON.stringify(data));
                    _this.addUser(data['fp_id'], data['user_id']);
                });
                // alert(JSON.stringify(result));
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    RegisterPage.prototype.socialLoginGoogle = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
                //  alert(JSON.stringify(result['user']['email'])); //email
                //alert(JSON.stringify(result['user']['displayName'])); // name
                //alert(JSON.stringify(result['user]['photoURL])); //image
                var url = "http://api.givet.co.uk/api/register_social.php";
                var postData = new FormData();
                postData.append('username', result['user']['email']);
                postData.append('type', '1');
                postData.append('first_name', result['user']['displayName']);
                postData.append('img', result['user']['photoURL']);
                _this.data = _this.http.post(url, postData);
                _this.data.subscribe(function (data) {
                    // alert(JSON.stringify(data));
                    _this.addUser(data['fp_id'], data['user_id']);
                });
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    RegisterPage.prototype.socialLoginTwitter = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.TwitterAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
                // alert(JSON.stringify(result['additionalUserInfo']['username'])); //username
                //alert(JSON.stringify(result['user']['displayName'])); // name
                //alert(JSON.stringify(result['user]['photoURL])); //image
                var url = "http://api.givet.co.uk/api/register_social.php";
                var postData = new FormData();
                postData.append('username', result['additionalUserInfo']['username']);
                postData.append('type', '2');
                postData.append('first_name', result['user']['displayName']);
                postData.append('img', result['user']['photoURL']);
                _this.data = _this.http.post(url, postData);
                _this.data.subscribe(function (data) {
                    //alert(JSON.stringify(data));
                    _this.addUserSoc(data['fp_id'], data['user_id'], result['credential']['accessToken'], result['credential']['secret'], result['credential']['secret']);
                });
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    RegisterPage.prototype.moveToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.postReg = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.regData.mail.length <= 0 || this.regData.pass.length <= 0 || this.regData.fn.length <= 0 || this.regData.ln.length <= 0
            || this.regData.date.length <= 0) {
            this.loading.dismiss();
            this.presentError();
        }
        else {
            var url = "http://api.givet.co.uk/api/register.php";
            var postData = new FormData();
            postData.append('email', this.regData.mail);
            postData.append('password', this.regData.pass);
            postData.append('first_name', this.regData.fn);
            postData.append('last_name', this.regData.ln);
            postData.append('date', this.regData.date);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                if (data['user']['status'] == "400 OK") {
                    _this.loading.dismiss();
                }
                else {
                    //alert(JSON.stringify(data));
                    _this.addUser(data['user']['fp_id'], data['user']['user_id']);
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                }
            });
        }
    };
    RegisterPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'This user is already registered.',
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.managePassword = function () {
        if (this.passwordtype == 'password') {
            this.passwordtype = 'text';
            this.passeye = 'eye-off';
        }
        else {
            this.passwordtype = 'password';
            this.passeye = 'eye';
        }
    };
    RegisterPage.prototype.managecnfPassword = function () {
        if (this.cnfpasswordtype == 'password') {
            this.cnfpasswordtype = 'text';
            this.cnfpasseye = 'eye-off';
        }
        else {
            this.cnfpasswordtype = 'password';
            this.cnfpasseye = 'eye';
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\register\register.html"*/'\n\n<ion-content class="bg-img">\n  <div class="main-content">\n    <div padding text-center class="container-logo">\n      <img src="assets/imgs/logo.png">\n    </div>\n\n    <div padding  style="width: 100%;">\n   \n      <div class="errormsg">\n        <div *ngIf="username.errors && username.touched">\n          <p>Username is required.</p>\n        </div>\n        <div class="error-box" *ngIf="email.errors && email.touched">\n          <p>Email is required.</p>\n        </div>\n        <div *ngIf="password.errors && password.touched">\n          <p>Password is required.</p>\n        </div>\n        <div *ngIf="cnfpass.errors && cnfpass.touched">\n          <p>Confirm password is required.</p>\n        </div>\n      </div>\n      <ion-list>\n        <ion-item padding-right>\n          <ion-label><ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n          <ion-input  id="username" type="text" [formControl]="first_nameCrt" [(ngModel)]="regData.fn" required placeholder="First Name "></ion-input>\n        </ion-item>\n\n        <ion-item padding-right>\n            <ion-label><ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n            <ion-input  id="username" type="text" [formControl]="last_nameCrt" [(ngModel)]="regData.ln"  required placeholder="Last Name "></ion-input>\n          </ion-item>\n\n\n         <ion-item>\n          <ion-label><ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="regData.mail" [formControl]="email" id="email" type="email" required placeholder="Email *"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="regData.pass" [formControl]="password" id="password" type="{{passwordtype}}" required placeholder="Password *"></ion-input>\n          <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>\n        </ion-item>\n\n        <ion-item>\n          <ion-label fixed>Birthday</ion-label>\n          <ion-datetime  style="width: 100%; text-align: right;" [formControl]="dateCrt" displayFormat="D MMM, YYYY" [(ngModel)]="regData.date" placeholder="Date"></ion-datetime>\n      </ion-item>\n\n      </ion-list>\n      <button ion-button full color="dark" (click)="postReg()">Sign up</button>\n   \n    <div class="sepretor-or" padding-horizontal> <p>Or</p></div>\n    <div padding text-center class="form-bottom-text">\n        <label>Sign up with </label>\n        </div>\n    <div text-center class="socialLogin" padding>\n      <button ion-button class="google" (click)="socialLoginGoogle()"><ion-icon name="logo-google" style="margin-right: 12px;"></ion-icon>Google</button>\n      <button ion-button class="facebook" (click)="socialLoginFB()"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon> Facebook</button>\n      <button ion-button class="twitter" (click)="socialLoginTwitter()"><ion-icon name="logo-twitter" style="margin-right: 12px;"></ion-icon> Twitter</button>\n    </div>\n    <div padding text-center class="form-bottom-text">\n      <label> Already have an Account? <a href="javascript:void(0);" (click)="moveToLogin()"> Sign In </a> </label>\n    </div>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_gift_profile_setting_gift_profile__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GiftProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GiftProfilePage = /** @class */ (function () {
    function GiftProfilePage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.ids = navParams.get('id');
    }
    GiftProfilePage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    GiftProfilePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.anyify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.shoes_eng = data['shoes'];
                _this.casual_eng = data['casual'];
                _this.pants_eng = data['pants'];
                _this.jackets_eng = data['jackets'];
                _this.dress_eng = data['dress'];
                _this.hat_eng = data['hat'];
                _this.culture_eng = data['cult'];
                _this.hobbies_eng = data['hob'];
                _this.what_not_eng = data['what_not'];
                _this.when_it_eng = data['what_it'];
                _this.gift_profile = data['gift'];
            });
            _this.url = "http://api.givet.co.uk/api/gift_profile.php?user_id=" + _this.user_id;
            _this.getData();
        });
    };
    GiftProfilePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GiftProfilePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.shoes = data['shoes'];
            _this.casual = data['casual'];
            _this.pants = data['pants'];
            _this.jackets = data['jackets'];
            _this.dress = data['dress'];
            _this.hat = data['hat'];
            _this.rand_1 = data['rand_1'];
            _this.rand_2 = data['rand_2'];
            _this.rand_3 = data['rand_3'];
            _this.rand_4 = data['rand_4'];
            _this.culture = data['culture'];
            _this.hobbies = data['hobbies'];
            _this.what_not = data['what_not'];
            _this.when_it = data['when_it'];
            _this.loading.dismiss();
        });
        //this.loading.dismiss();
    };
    GiftProfilePage.prototype.moToSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__setting_gift_profile_setting_gift_profile__["a" /* SettingGiftProfilePage */], {
            id: this.ids
        });
    };
    GiftProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-gift-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\gift-profile\gift-profile.html"*/'<!--\n  Generated template for the GiftProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  \n  <ion-navbar>\n    <ion-title>{{gift_profile}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="moToSetting(ids)">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-list >\n        <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label>\n              <p>{{shoes_eng}}</p>\n             \n              <h2>{{shoes}}</h2>\n            </ion-label>\n          </ion-item>\n           \n              <ion-item>\n                  <ion-icon name="ios-person" ></ion-icon>\n                  <ion-label>\n                      <p>{{jackets_eng}}</p>\n              \n                    <h2>{{jackets}}</h2>\n                  </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-person" ></ion-icon>\n                    <ion-label>\n                        <p>{{dress_eng}}</p>\n                      <h2>{{dress}}</h2>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item>\n                      <ion-icon name="ios-person" ></ion-icon>\n                      <ion-label>\n                          <p>{{hat_eng}}</p>\n                        <h2>{{hat}}</h2>\n                      </ion-label>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-icon name="ios-person" ></ion-icon>\n                        <ion-label>\n                            <p>{{culture_eng}}</p>\n                          <h2>{{culture}}</h2>\n                        </ion-label>\n                      </ion-item>\n\n                      <ion-item>\n                          <ion-icon name="ios-person" ></ion-icon>\n                          <ion-label>\n                              <p>{{hobbies_eng}}</p>\n                            <h2>{{hobbies}}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        \n                      <ion-item>\n                          <ion-icon name="ios-person" ></ion-icon>\n                          <ion-label>\n                              <p>{{what_not_eng}}</p>\n                            <h2>{{what_not}}</h2>\n                          </ion-label>\n                        </ion-item>\n\n\n                        <ion-grid>\n                            <ion-row>\n\n                                <ion-col>\n                        <ion-item>\n                            <ion-icon name="ios-person" ></ion-icon>\n                            <ion-label>\n                              <p>#1</p>\n                              <h2>{{rand_1}}</h2>\n                            </ion-label>\n                          </ion-item>\n\n\n                        </ion-col>\n\n                              <ion-col>\n                          \n                          <ion-item>\n                              <ion-icon name="ios-person" ></ion-icon>\n                              <ion-label>\n                                <p>#2</p>\n                                <h2>{{rand_2}}</h2>\n                              </ion-label>\n                            </ion-item>\n\n\n                          </ion-col>\n                          </ion-row>\n                        </ion-grid>\n\n\n                        <ion-grid>\n                            <ion-row>\n\n                                <ion-col>\n                            <ion-item>\n                                <ion-icon name="ios-person" ></ion-icon>\n                                <ion-label>\n                                  <p>#3</p>\n                                  <h2>{{rand_3}}</h2>\n                                </ion-label>\n                              </ion-item>\n                            </ion-col>\n\n                            <ion-col>\n                              <ion-item>\n                                  <ion-icon name="ios-person" ></ion-icon>\n                                  <ion-label>\n                                    <p>#4</p>\n                                    <h2>{{rand_4}}</h2>\n                                  </ion-label>\n                                </ion-item>\n                              </ion-col>\n </ion-row>\n                        </ion-grid>\n\n\n                        <ion-item>\n                            <ion-icon name="ios-person" ></ion-icon>\n                            <ion-label>\n                                <p>{{when_it_eng}}</p>\n                              <h2>{{when_it}}</h2>\n                            </ion-label>\n                          </ion-item>\n                             \n    </ion-list >\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\gift-profile\gift-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], GiftProfilePage);
    return GiftProfilePage;
}());

//# sourceMappingURL=gift-profile.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingGiftProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingGiftProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingGiftProfilePage = /** @class */ (function () {
    function SettingGiftProfilePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.result = [];
        this.loginData = { shoes: '', casual: '', pants: '', jackets: '', dress: '',
            hat: '', rand_1: '', rand_2: '', rand_3: '', rand_4: '', culture: '',
            hobbies: '', what_not: '', when_it: '' };
        this.ids = navParams.get('id');
    }
    SettingGiftProfilePage.prototype.ionViewDidLoad = function () {
        this.loadDB();
    };
    SettingGiftProfilePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.shoes_eng = data['shoes'];
                _this.casual_eng = data['casual'];
                _this.pants_eng = data['pants'];
                _this.jackets_eng = data['jackets'];
                _this.dress_eng = data['dress'];
                _this.hat_eng = data['hat'];
                _this.culture_eng = data['cult'];
                _this.hobbies_eng = data['hob'];
                _this.what_not_eng = data['what_not'];
                _this.when_it_eng = data['what_it'];
                _this.gift_profile = data['gift'];
                _this.set_gift = data['set_gift'];
                _this.updates = data['updates'];
            });
            _this.url = "http://api.givet.co.uk/api/gift_profile.php?user_id=" + _this.user_id_2;
            _this.getData();
        });
    };
    SettingGiftProfilePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SettingGiftProfilePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.loginData.shoes = data['shoes'];
            _this.loginData.casual = data['casual'];
            _this.loginData.pants = data['pants'];
            _this.loginData.jackets = data['jackets'];
            _this.loginData.dress = data['dress'];
            _this.loginData.hat = data['hat'];
            _this.loginData.rand_1 = data['rand_1'];
            _this.loginData.rand_2 = data['rand_2'];
            _this.loginData.rand_3 = data['rand_3'];
            _this.loginData.rand_4 = data['rand_4'];
            _this.loginData.culture = data['culture'];
            _this.loginData.hobbies = data['hobbies'];
            _this.loginData.what_not = data['what_not'];
            _this.loginData.when_it = data['when_it'];
            _this.loading.dismiss();
        });
        // this.loading.dismiss();
    };
    SettingGiftProfilePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url_2 = "http://api.givet.co.uk/api/edit_gift_profile.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id_2);
        postData.append('shoes', this.loginData.shoes);
        postData.append('casual', this.loginData.casual);
        postData.append('jackets', this.loginData.jackets);
        postData.append('dress', this.loginData.dress);
        postData.append('hat', this.loginData.hat);
        postData.append('rand_1', this.loginData.rand_1);
        postData.append('rand_2', this.loginData.rand_2);
        postData.append('rand_3', this.loginData.rand_3);
        postData.append('rand_4', this.loginData.rand_4);
        postData.append('culture', this.loginData.culture);
        postData.append('hobbies', this.loginData.hobbies);
        postData.append('what_not', this.loginData.what_not);
        postData.append('when_it', this.loginData.when_it);
        this.data_post = this.http.post(url_2, postData);
        this.data_post.subscribe(function (data_post) {
            if (data_post['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data_post);
        });
        this.loading.dismiss();
    };
    SettingGiftProfilePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingGiftProfilePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingGiftProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting-gift-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\setting-gift-profile\setting-gift-profile.html"*/'<!--\n  Generated template for the GiftProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{set_gift}}</ion-title>\n  \n      \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content >\n  \n      <ion-list >\n          <ion-item>\n              <ion-icon name="ios-person" ></ion-icon>\n              <ion-label  color="primary" stacked>\n                  {{shoes_eng}}\n              </ion-label>\n\n            \n                <ion-textarea type="text"  [(ngModel)]="loginData.shoes" placeholder="e.g. size,width"></ion-textarea>\n              \n            </ion-item>\n            \n              \n                <ion-item>\n                    <ion-icon name="ios-person" ></ion-icon>\n                    <ion-label  color="primary" stacked>\n                        {{jackets_eng}}\n                    </ion-label>\n                 \n                      <ion-textarea type="text"  [(ngModel)]="loginData.jackets"placeholder="e.g. size,width"></ion-textarea>\n                   \n                  </ion-item>\n                  <ion-item>\n                      <ion-icon name="ios-person" ></ion-icon>\n                      <ion-label  color="primary" stacked>\n                          {{dress_eng}}\n                      </ion-label>\n                    \n                        <ion-textarea type="text"  [(ngModel)]="loginData.dress" placeholder="e.g. size,width"></ion-textarea>\n                      \n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="ios-person" ></ion-icon>\n                        <ion-label  color="primary" stacked>\n                            {{hat_eng}}\n                        </ion-label>\n                       \n                          <ion-textarea type="text"  [(ngModel)]="loginData.hat" placeholder="e.g. size,width"></ion-textarea>\n                        \n                      </ion-item>\n  \n                      <ion-item>\n                          <ion-icon name="ios-person" ></ion-icon>\n                          <ion-label color="primary" stacked>\n                              {{culture_eng}}\n                          </ion-label>\n                        \n                            <ion-textarea type="text"  [(ngModel)]="loginData.culture" placeholder="e.g. favorite artists,music,venues,and oragnizations you support" rows="4"></ion-textarea>\n                          \n                        </ion-item>\n  \n                        <ion-item>\n                            <ion-icon name="ios-person" ></ion-icon>\n                            <ion-label color="primary" stacked>\n                                {{hobbies_eng}}\n                            </ion-label>\n                            \n                              <ion-textarea type="text"  [(ngModel)]="loginData.hobbies" placeholder="e.g. running , knitting, snow sport, maintaining my 57 Chevy" rows="4"></ion-textarea>\n                           \n                          </ion-item>\n  \n                          \n                        <ion-item>\n                            <ion-icon name="ios-person" ></ion-icon>\n                            <ion-label  color="primary" stacked>\n                                {{what_not_eng}}\n                            </ion-label>\n                          \n                              <ion-textarea  type="text"  [(ngModel)]="loginData.what_not" placeholder="e.g. I am allergic to peanuts, no ties, buy me a vacuum at your own risk" rows="4"></ion-textarea>\n                            \n                          </ion-item>\n  \n  \n                          <ion-grid>\n                              <ion-row>\n  \n                                  <ion-col>\n                          <ion-item>\n                              <ion-icon name="ios-person" ></ion-icon>\n                              <ion-label  color="primary" stacked>\n                                #1\n                              </ion-label>\n                                <ion-textarea type="text" [(ngModel)]="loginData.rand_1" ></ion-textarea>\n                              \n                            </ion-item>\n  \n  \n                          </ion-col>\n  \n                                <ion-col>\n                            \n                            <ion-item>\n                                <ion-icon name="ios-person" ></ion-icon>\n                                <ion-label  color="primary" stacked>\n                                  #2\n                                </ion-label>\n                                  <ion-textarea type="text" [(ngModel)]="loginData.rand_2"  ></ion-textarea>\n                               \n                              </ion-item>\n  \n  \n                            </ion-col>\n                            </ion-row>\n                          </ion-grid>\n  \n  \n                          <ion-grid>\n                              <ion-row>\n  \n                                  <ion-col>\n                              <ion-item>\n                                  <ion-icon name="ios-person" ></ion-icon>\n                                  <ion-label  color="primary" stacked>\n                                    #3\n                                  </ion-label>\n                                    <ion-textarea type="text" [(ngModel)]="loginData.rand_3"  ></ion-textarea>\n                                 \n                                </ion-item>\n                              </ion-col>\n  \n                              <ion-col>\n                                <ion-item>\n                                    <ion-icon name="ios-person" ></ion-icon>\n                                    <ion-label  color="primary" stacked>\n                                      #4\n                                    </ion-label>\n                                      <ion-textarea type="text" [(ngModel)]="loginData.rand_4" ></ion-textarea>\n                                    \n                                  </ion-item>\n                                </ion-col>\n   </ion-row>\n                          </ion-grid>\n  \n  \n                          <ion-item>\n                              <ion-icon name="ios-person" ></ion-icon>\n                              <ion-label  color="primary" stacked>\n                                  {{when_it_eng}}\n                              </ion-label>\n                             \n                                <ion-textarea  type="text" [(ngModel)]="loginData.when_it"  placeholder="e.g. anything else you want to share." rows="4"></ion-textarea >\n                              \n                            </ion-item>\n                            <button ion-button full (click)="save()">{{updates}}</button>     \n      </ion-list >\n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\setting-gift-profile\setting-gift-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], SettingGiftProfilePage);
    return SettingGiftProfilePage;
}());

//# sourceMappingURL=setting-gift-profile.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingProfilePage = /** @class */ (function () {
    function SettingProfilePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, databaseProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.camera = camera;
        this.dev = [];
        this.devs = {};
        this.result = [];
        this.loginData = { name: '', email: '', surename: '', bithday: '', phone: '',
            home_adress: '', mail_adress: '', password: '' };
        this.ids = navParams.get('id');
        this.loadDB();
    }
    SettingProfilePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SettingProfilePage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingProfilePage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
            var postData = new FormData();
            postData.append('img', imageData);
            postData.append('user_id', _this.user_id_2);
            postData.append('image_name', 'user_image.jpg');
            postData.append('type', 'profile');
            _this.data = _this.http.post(url, postData);
            _this.data.subscribe(function (data) {
                _this.loading.dismiss();
            });
            _this.res_image = '1';
        }, function (err) {
            // Handle error
        });
        this.loading.dismiss();
    };
    SettingProfilePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            _this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/set_profile_image.php";
            var postData = new FormData();
            postData.append('img', imageData);
            postData.append('user_id', _this.user_id_2);
            postData.append('image_name', 'user_image.jpg');
            postData.append('type', 'profile');
            _this.data = _this.http.post(url, postData);
            _this.data.subscribe(function (data) {
                _this.loading.dismiss();
            });
            _this.res_image = '1';
        }, function (err) {
            // Handle error
        });
    };
    SettingProfilePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.set_profile = data['set_profile'];
                _this.update_image_eng = data['update_image'];
                _this.first_name_eng = data['first_name'];
                _this.last_name_eng = data['last_name'];
                _this.email_eng = data['email'];
                _this.pass_eng = data['password'];
                _this.number_eng = data['number'];
                _this.bith_eng = data['bithday'];
                _this.home_eng = data['home'];
                _this.mail_eng = data['mail'];
                _this.updates = data['updates'];
            });
            _this.url = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id_2;
            _this.getData();
        });
    };
    SettingProfilePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.loginData.name = data['name'];
            _this.loginData.email = data['email'];
            _this.loginData.surename = data['surename'];
            _this.image = data['image'];
            _this.loginData.bithday = data['bithday'];
            _this.loginData.phone = data['phone'];
            _this.loginData.password = data['password'];
            _this.loginData.home_adress = data['home_adress'];
            _this.loginData.mail_adress = data['mail_adress'];
            var person = "http";
            var personRegExp = new RegExp(person);
            if (personRegExp.test(_this.image)) {
                console.log(person + " is a philosopher.");
                _this.test = '1';
            }
            else {
                console.log(person + " is NOT a philosopher.");
            }
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    SettingProfilePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertName();
        }
        else if (this.loginData.password.length <= 0) {
            this.loading.dismiss();
            this.presentAlertPass();
        }
        else if (this.loginData.surename.length <= 0) {
            this.loading.dismiss();
            this.presentAlertSure();
        }
        else if (this.loginData.bithday.length <= 0) {
            this.loading.dismiss();
            this.presentAlertBith();
        }
        else if (this.loginData.email.length <= 0) {
            this.loading.dismiss();
            this.presentAlertEmail();
        }
        else {
            var url = "http://api.givet.co.uk/api/update_profile.php";
            var postData = new FormData();
            postData.append('id_user', this.ids);
            postData.append('password', this.loginData.password);
            postData.append('first_name', this.loginData.name);
            postData.append('last_name', this.loginData.surename);
            postData.append('date', this.loginData.bithday);
            postData.append('email', this.loginData.email);
            postData.append('user_phone', this.loginData.phone);
            postData.append('user_home', this.loginData.home_adress);
            postData.append('user_mail', this.loginData.mail_adress);
            postData.append('fp_id', this.fp_id);
            this.data_post = this.http.post(url, postData);
            this.data_post.subscribe(function (data) {
                if (data['user']['status'] == "200 OK") {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__["a" /* MyProfilePage */], { reset: 1 });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(data);
            });
        }
        this.loading.dismiss();
    };
    SettingProfilePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingProfilePage.prototype.presentAlertSure = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Surename.',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingProfilePage.prototype.presentAlertPass = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Password.',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingProfilePage.prototype.presentAlertEmail = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Email.',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingProfilePage.prototype.presentAlertBith = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Birthday.',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingProfilePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingProfilePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\setting-profile\setting-profile.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{set_profile}}</ion-title>\n\n  \n  </ion-navbar>\n\n  </ion-header>\n  \n  <ion-content >\n    \n\n    <ion-list >\n       \n            <ion-avatar class="img_prof" >\n               \n         \n              \n              <img *ngIf="image == null " src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n              <img *ngIf=" test == null && res_image ==null" src="https://givet.co.uk/backend/web/images/users/{{image}}">\n              <img *ngIf="res_image !=null" src = "{{base64Image}}"/>\n\n              </ion-avatar>\n              <ion-item>\n                  <button  ion-button icon-end (click)="openModal()">\n                      {{update_image_eng}}\n                      <ion-icon name="cloud-download"></ion-icon>\n                    </button>\n    \n                  \n                  </ion-item>\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n       \n        <ion-label  color="primary" stacked>\n            {{first_name_eng}} *\n          </ion-label>\n       \n\n          <ion-input type="text" [(ngModel)]="loginData.name"  placeholder="{{first_name_eng}} "></ion-input>\n        \n      </ion-item>\n\n\n      <ion-item>\n          <ion-icon name="ios-person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n              {{last_name_eng}} *\n          </ion-label>\n            <ion-input type="text" [(ngModel)]="loginData.surename"  placeholder=" {{last_name_eng}} "></ion-input>\n          \n        </ion-item>\n      \n      <ion-item>\n        <ion-icon name="mail" ></ion-icon>\n        <ion-label  color="primary" stacked>\n            {{email_eng}} *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.email"  placeholder=" {{email_eng}} "></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="password" ></ion-icon>\n          <ion-label  color="primary" stacked>\n              {{pass_eng}} *\n          </ion-label>\n            <ion-input type="text" [(ngModel)]="loginData.password" placeholder="{{pass_eng}} "></ion-input>\n          \n        </ion-item>\n  \n      <ion-item>\n          <ion-icon name="person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n              {{number_eng}}\n          </ion-label>\n         \n            <ion-input type="text" [(ngModel)]="loginData.phone"  placeholder="{{number_eng}}"></ion-input>\n           \n        </ion-item>\n        <ion-item>\n            <ion-icon name="person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n                {{bith_eng}} *\n            </ion-label>\n       \n              <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="loginData.bithday" placeholder="{{loginData.bithday}} "></ion-datetime>\n              \n\n          </ion-item>\n          <ion-item>\n              <ion-icon name="person" ></ion-icon>\n              <ion-label   color="primary" stacked>\n                  {{home_eng}}\n              </ion-label>\n              \n                <ion-input type="text"  [(ngModel)]="loginData.home_adress" placeholder="{{home_eng}}"></ion-input>\n                \n            </ion-item>\n            <ion-item>\n                <ion-icon name="person" ></ion-icon>\n                <ion-label  color="primary" stacked>\n                    {{mail_eng}}\n                </ion-label>\n              \n                  <ion-input type="text"  [(ngModel)]="loginData.mail_adress" placeholder="{{mail_eng}}"></ion-input>\n                \n              </ion-item>\n  \n              <button ion-button full (click)="save()">{{updates}}</button>\n\n              <ion-item>\n\n              \n            </ion-item>\n  \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\setting-profile\setting-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], SettingProfilePage);
    return SettingProfilePage;
}());

//# sourceMappingURL=setting-profile.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_create_products_create__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_view_products_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GlobalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlobalProductPage = /** @class */ (function () {
    function GlobalProductPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.searchBar = false;
        this.loadDB();
    }
    GlobalProductPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.loadDB();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    GlobalProductPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_all_prod.php?fav_title=" + this.queryText;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                _this.items = data;
            });
        }
    };
    GlobalProductPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.loadDB();
    };
    GlobalProductPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.product_lang = data['product'];
                _this.create_new = data['create_new'];
            });
            _this.url = "http://api.givet.co.uk/api/get_all_products.php";
            _this.getData();
        });
    };
    GlobalProductPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GlobalProductPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    GlobalProductPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_view_products_view__["a" /* ProductsViewPage */], {
            id: item['id']
        });
    };
    GlobalProductPage.prototype.moToCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__products_create_products_create__["a" /* ProductsCreatePage */]);
    };
    GlobalProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-global-product',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\global-product\global-product.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!searchBar">{{product_lang}}</ion-title>\n   \n  \n    <ion-buttons *ngIf="!searchBar" end style="margin-right: 3px;">\n        <button ion-button icon-only (click)="moToCreate()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n      (ionInput)="updateText($event)"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n      \n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingText="Pull to refresh..."\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n      \n  <ion-list>\n\n    \n        <ion-list *ngIf="items == null " text-center>\n  \n      \n            <button *ngIf="items == null" (click)="moToCreate()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new}}</button>\n          </ion-list>\n     \n      \n\n      <ion-col *ngFor="let item of items"  no-padding>\n\n          <ion-card (click)="moToView(item)">\n              \n              \n              <ion-item>\n                  <ion-avatar item-start>\n                    <img src="https://givet.co.uk/backend/web/images/{{item.image}}">\n                  </ion-avatar>\n\n                  <h2 (click)="moToView(item)"> {{item.name}}</h2>\n                 \n                </ion-item>\n\n              <ion-card-header *ngIf=" item.rating == \'0\'" class="no-mg">\n\n\n\n                      <ion-icon  name="star" class=" unchecked 1"></ion-icon>\n                      \n                      <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n  \n                      \n                      \n                    </ion-card-header>\n\n\n              <ion-card-header *ngIf=" item.rating == \'1\'" class="no-mg">\n\n\n\n                  <ion-icon  name="star" class=" checked 1"></ion-icon>\n                  \n                  <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n\n                  \n                  \n                </ion-card-header>\n\n                <ion-card-header *ngIf=" item.rating == \'2\'" class="no-mg">\n\n\n\n                      <ion-icon  name="star" class=" checked 1"></ion-icon>\n                      \n                      <ion-icon  name="star" class=" checked 2"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n  \n                      \n                      \n                    </ion-card-header>\n\n                    <ion-card-header *ngIf=" item.rating == \'3\'" class="no-mg">\n\n\n\n                          <ion-icon  name="star" class=" checked 1"></ion-icon>\n                          \n                          <ion-icon  name="star" class=" checked 2"></ion-icon>\n                          <ion-icon  name="star" class=" checked 3"></ion-icon>\n                          <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                          <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n      \n                          \n                          \n                        </ion-card-header>\n\n                        <ion-card-header *ngIf=" item.rating == \'4\'" class="no-mg">\n\n\n\n                              <ion-icon  name="star" class=" checked 1"></ion-icon>\n                              \n                              <ion-icon  name="star" class=" checked 2"></ion-icon>\n                              <ion-icon  name="star" class=" checked 3"></ion-icon>\n                              <ion-icon  name="star" class=" checked 4"></ion-icon>\n                              <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n          \n                              \n                              \n                            </ion-card-header>\n\n                            <ion-card-header *ngIf=" item.rating == \'5\'" class="no-mg">\n\n\n\n                                  <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                  \n                                  <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                  <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                  <ion-icon  name="star" class=" checked 4"></ion-icon>\n                                  <ion-icon  name="star" class=" checked 5"></ion-icon>\n              \n                                  \n                                  \n                                </ion-card-header>\n\n                <ion-card-header class="no-mg">\n                    <span class="label label-success">                  \n                        <ion-icon name="md-cash"></ion-icon> {{item.price}}</span> \n                    \n                        <span class="label label-warning">                  \n                            <ion-icon name="ios-grid-outline"></ion-icon> {{item.quan}}</span> \n                  </ion-card-header>\n              \n            \n              <ion-card-content [innerHtml]="(item.details | slice:0:150) + (item.details.length > 150 ? \'...\' : \'\') ">\n                 \n              </ion-card-content>\n            \n            </ion-card>\n\n      </ion-col>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\global-product\global-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], GlobalProductPage);
    return GlobalProductPage;
}());

//# sourceMappingURL=global-product.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, navParams, http, loadingCtrl, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.photoViewer = photoViewer;
        this.dev = [];
        this.devs = {};
        this.searchBar = false;
        this.presentLoadingDefault();
        this.url = "http://api.givet.co.uk/api/gallery.php";
        this.getData();
    }
    GalleryPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GalleryPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    GalleryPage.prototype.moToView = function (item) {
        if (item['image'] != null) {
            this.photoViewer.show("https://givet.co.uk/backend/web/images/users/" + item['image']);
        }
        else {
            this.photoViewer.show("https://givet.co.uk/backend/web/images/default-250x250.png");
        }
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\gallery\gallery.html"*/'<!--\n  Generated template for the GalleryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Gallery</ion-title>\n    \n    </ion-navbar>\n  </ion-header>\n\n\n\n<ion-content >\n\n\n\n    <ion-list>\n\n        <ion-col *ngFor="let item of items"  no-padding>\n      \n      \n          <ion-card (click)="moToView(item)">\n              <img *ngIf="item.image!=null" src="https://givet.co.uk/backend/web/images/users/{{item.image}}"/>\n              <img *ngIf="item.image==null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n              <ion-card-content>\n               \n                <p  [innerHtml]="item.desc ">\n                 \n                </p>\n              </ion-card-content>\n      \n             \n            </ion-card>\n      \n          </ion-col>\n          \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\gallery\gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GlobalUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlobalUserPage = /** @class */ (function () {
    function GlobalUserPage(navCtrl, modalCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.dev = [];
        this.devs = {};
        this.items = [];
        this.searchBar = false;
        this.person = "http";
        this.personRegExp = new RegExp(this.person);
        this.url = "http://api.givet.co.uk/api/get_all_users.php";
        this.getData();
    }
    GlobalUserPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GlobalUserPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.url = "http://api.givet.co.uk/api/get_all_users.php";
        this.getData();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    GlobalUserPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_user.php?email=" + this.queryText;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                _this.items = data;
            });
        }
    };
    GlobalUserPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/get_all_users.php";
        this.getData();
    };
    GlobalUserPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
            _this.loading.dismiss();
        });
    };
    GlobalUserPage.prototype.openModal = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: item['id']
        });
    };
    GlobalUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-global-user',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\global-user\global-user.html"*/'<!--\n  Generated template for the GlobalUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!searchBar">Users</ion-title>\n  \n      \n      <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n      (ionInput)="updateText($event)"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n      \n    </ion-navbar>\n  \n  </ion-header>\n\n\n\n\n  <ion-content>\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n            pullingText="Pull to refresh..."\n            refreshingText="Refreshing...">\n          </ion-refresher-content>\n        </ion-refresher>\n  \n      <ion-list >\n  \n          <ion-col *ngFor="let item of items"  no-padding>\n  \n          <ion-card *ngIf="item.name != \'Admin\'" (click)="openModal(item)">\n  \n              <ion-item>\n                <ion-avatar item-start>\n                  <img *ngIf="item.image != null && item.image.indexOf(\'http\') === -1" src="https://givet.co.uk/backend/web/images/users/{{item.image}}">\n                  <img *ngIf="item.image.indexOf(\'http\') !== -1 && item.image != null" src="{{item.image}}">\n                  <img *ngIf="item.image == null" src="https://givet.co.uk/backend/web/images/users/def_user.jpg"/>\n                  \n                </ion-avatar>\n                <button ion-button icon-start clear item-end>\n                    \n                  </button>\n                <h2>{{item.name}} {{item.surename}}</h2>\n              \n                 \n                \n              </ion-item>\n             \n            \n  \n              </ion-card>\n  \n            </ion-col>\n      </ion-list >\n  \n  </ion-content>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\global-user\global-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], GlobalUserPage);
    return GlobalUserPage;
}());

//# sourceMappingURL=global-user.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-users/add-users.module": [
		753,
		48
	],
	"../pages/article-view/article-view.module": [
		752,
		47
	],
	"../pages/articles/articles.module": [
		754,
		46
	],
	"../pages/events-create/events-create.module": [
		755,
		45
	],
	"../pages/events-update/events-update.module": [
		756,
		44
	],
	"../pages/events-view/events-view.module": [
		757,
		43
	],
	"../pages/events/events.module": [
		760,
		42
	],
	"../pages/favorite-create/favorite-create.module": [
		778,
		41
	],
	"../pages/favorite-update/favorite-update.module": [
		759,
		40
	],
	"../pages/favorite-view/favorite-view.module": [
		758,
		39
	],
	"../pages/forget/forget.module": [
		762,
		38
	],
	"../pages/friends/friends.module": [
		761,
		37
	],
	"../pages/gallery-view/gallery-view.module": [
		763,
		36
	],
	"../pages/gallery/gallery.module": [
		767,
		35
	],
	"../pages/gift-list/gift-list.module": [
		766,
		2
	],
	"../pages/gift-profile/gift-profile.module": [
		764,
		34
	],
	"../pages/global-product/global-product.module": [
		765,
		33
	],
	"../pages/global-user/global-user.module": [
		768,
		32
	],
	"../pages/groups-create/groups-create.module": [
		769,
		31
	],
	"../pages/groups-update/groups-update.module": [
		771,
		30
	],
	"../pages/groups-view/groups-view.module": [
		772,
		29
	],
	"../pages/groups/groups.module": [
		775,
		28
	],
	"../pages/login/login.module": [
		770,
		27
	],
	"../pages/modal-profile/modal-profile.module": [
		776,
		26
	],
	"../pages/my-lists/my-lists.module": [
		779,
		25
	],
	"../pages/my-profile/my-profile.module": [
		773,
		24
	],
	"../pages/my/my.module": [
		774,
		1
	],
	"../pages/products-create/products-create.module": [
		777,
		23
	],
	"../pages/products-update/products-update.module": [
		782,
		22
	],
	"../pages/products-view/products-view.module": [
		783,
		21
	],
	"../pages/products/products.module": [
		781,
		20
	],
	"../pages/register/register.module": [
		780,
		19
	],
	"../pages/select-event/select-event.module": [
		785,
		18
	],
	"../pages/select-product/select-product.module": [
		784,
		17
	],
	"../pages/setting-gift-profile/setting-gift-profile.module": [
		788,
		16
	],
	"../pages/setting-profile/setting-profile.module": [
		786,
		15
	],
	"../pages/social-friends/social-friends.module": [
		789,
		14
	],
	"../pages/test/test.module": [
		787,
		0
	],
	"../pages/user-events/user-events.module": [
		790,
		13
	],
	"../pages/user-favlist/user-favlist.module": [
		791,
		12
	],
	"../pages/user-friends/user-friends.module": [
		793,
		11
	],
	"../pages/user-giftprofile/user-giftprofile.module": [
		792,
		10
	],
	"../pages/user-groups/user-groups.module": [
		795,
		9
	],
	"../pages/user-profile/user-profile.module": [
		797,
		8
	],
	"../pages/user-wishlist/user-wishlist.module": [
		796,
		7
	],
	"../pages/wish-list/wish-list.module": [
		794,
		6
	],
	"../pages/wishlist-create/wishlist-create.module": [
		798,
		5
	],
	"../pages/wishlist-update/wishlist-update.module": [
		799,
		4
	],
	"../pages/wishlist-view/wishlist-view.module": [
		800,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 258;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_giftprofile_user_giftprofile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_friends_user_friends__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_groups_user_groups__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_wishlist_user_wishlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_events_user_events__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_favlist_user_favlist__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__social_friends_social_friends__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, platform, params, viewCtrl, http, alertCtrl, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.ides = params.get('ides');
        this.loadDB();
    }
    UserProfilePage.prototype.leav = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Would you like to delete this user?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        _this.DelFriend();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    UserProfilePage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.profile = data['profile'];
                _this.phone_eng = data['number'];
                _this.bithday_eng = data['bithday'];
                _this.home_adress_eng = data['home'];
                _this.mail_adress_eng = data['mail'];
                _this.gift_eng = data['gift'];
                _this.friends_eng = data['friend'];
                _this.groups_eng = data['groups'];
                _this.wishlist_eng = data['wishlist'];
                _this.events_lang = data['event'];
                _this.fav_list_eng = data['fav'];
                _this.product_eng = data['product'];
            });
            _this.url = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.ides;
            _this.getData();
        });
    };
    UserProfilePage.prototype.moveToProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], {
            id: this.ides
        });
    };
    UserProfilePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    UserProfilePage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.name = data['name'];
            _this.email = data['email'];
            _this.surename = data['surename'];
            _this.image = data['image'];
            _this.bithday = data['bithday'];
            if (_this.bithday.length > 0) {
                _this.bithday = data['bithday'];
            }
            else {
                _this.bithday = "-";
            }
            _this.phone = data['phone'];
            if (_this.phone.length > 0) {
                _this.phone = data['phone'];
            }
            else {
                _this.phone = "-";
            }
            _this.home_adress = data['home_adress'];
            if (_this.home_adress.length > 0) {
                _this.home_adress = data['home_adress'];
            }
            else {
                _this.home_adress = "-";
            }
            _this.mail_adress = data['mail_adress'];
            if (_this.mail_adress.length > 0) {
                _this.mail_adress = data['mail_adress'];
            }
            else {
                _this.mail_adress = "-";
            }
            var person = "http";
            var personRegExp = new RegExp(person);
            if (personRegExp.test(_this.image)) {
                console.log(person + " is a philosopher.");
                _this.test = '1';
            }
            else {
                console.log(person + " is NOT a philosopher.");
            }
            _this.url_friend = "http://api.givet.co.uk/api/check_friend.php?user_id_1=" + _this.user_id_2 + "&user_id_2=" + _this.ides;
            _this.data_friend = _this.http.get(_this.url_friend);
            _this.data_friend.subscribe(function (data_friend) {
                if (data_friend['status'] != "400 OK") {
                    _this.status = data_friend['status'];
                }
                else if (data_friend['status'] == "400 OK") {
                    _this.status = null;
                }
                _this.url_friend2 = "http://api.givet.co.uk/api/check_friend.php?user_id_1=" + _this.ides + "&user_id_2=" + _this.user_id_2;
                _this.data_friend2 = _this.http.get(_this.url_friend2);
                _this.data_friend2.subscribe(function (data_friend2) {
                    if (data_friend2['status'] != "400 OK") {
                        _this.status_friend = data_friend2['status'];
                    }
                    else if (data_friend2['status'] == "400 OK") {
                        _this.status_friend = null;
                    }
                    _this.url_count = "http://api.givet.co.uk/api/count_user.php?user_id=" + _this.ides;
                    _this.data_count = _this.http.get(_this.url_count);
                    _this.data_count.subscribe(function (data_count) {
                        _this.events = data_count['events'];
                        _this.wishlist = data_count['wishlist'];
                        _this.fav_list = data_count['fav_list'];
                        _this.groups = data_count['groups'];
                        _this.friends = data_count['friends'];
                        _this.products = data_count['products'];
                        _this.url_soc = "http://api.givet.co.uk/api/get_social.php?user_id=" + _this.ides;
                        _this.data_soc = _this.http.get(_this.url_soc);
                        _this.data_soc.subscribe(function (data_soc) {
                            for (var _i = 0, data_soc_1 = data_soc; _i < data_soc_1.length; _i++) {
                                var item = data_soc_1[_i];
                                if (item['soc_type'] == "twit") {
                                    _this.twit = item['link'];
                                }
                                else if (item['soc_type'] == "google") {
                                    _this.google = item['link'];
                                }
                                else if (item['soc_type'] == "inst") {
                                    _this.inst = item['link'];
                                }
                                else if (item['soc_type'] == "fb") {
                                    _this.fb = item['link'];
                                }
                            }
                        });
                    });
                });
            });
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UserProfilePage.prototype.moveToGiftProfile = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_giftprofile_user_giftprofile__["a" /* UserGiftprofilePage */], {
            id: this.ides
        });
    };
    UserProfilePage.prototype.moveToFriendsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_friends_user_friends__["a" /* UserFriendsPage */], {
            id: this.ides
        });
    };
    UserProfilePage.prototype.moveToGroupPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_groups_user_groups__["a" /* UserGroupsPage */], {
            id: this.ides
        });
    };
    UserProfilePage.prototype.moveToWishList = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_wishlist_user_wishlist__["a" /* UserWishlistPage */], {
            id: this.ides
        });
    };
    UserProfilePage.prototype.moveToEvents = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_events_user_events__["a" /* UserEventsPage */], {
            id: this.ides
        });
    };
    UserProfilePage.prototype.moveToFav = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__user_favlist_user_favlist__["a" /* UserFavlistPage */], {
            id: this.ides
        });
    };
    UserProfilePage.prototype.moveToSocialFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__social_friends_social_friends__["a" /* SocialFriendsPage */]);
    };
    UserProfilePage.prototype.AddNew = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '1');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.NotWait = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '2');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.AllAccess = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '3');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.DelFriend = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '4');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.Unsibr = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '5');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.DontAdd = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '6');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.AddOldFriend = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '7');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-profile\user-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n   \n  \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n            <img class="goga" *ngIf=" test != null" src="{{image}}">\n            <img class="goga" *ngIf=" test == null" src="https://givet.co.uk/backend/web/images/users/{{image}}">\n        </ion-avatar>\n        <h2>{{name}} {{surename}}</h2>\n        <p *ngIf="status == \'1\'">{{email}}</p>\n        \n        <div *ngIf="ides!=user_id_2">\n        <button *ngIf="status == null && status_friend ==null" ion-button color="secondary" (click)="AddNew()">Add to Friend </button>\n        <button *ngIf="status == \'2\'" ion-button style="background-color: #f39c12" (click)="NotWait()">Stop Waiting...</button>\n        <button *ngIf="status_friend == \'2\'" ion-button color="secondary" (click)="AllAccess()">Add Friend  </button>\n        <button *ngIf="status == \'1\'" ion-button color="danger" (click)="leav()">Remove Friend</button>\n        <button *ngIf="status == \'3\'" ion-button style="background-color: #f39c12" (click)="Unsibr()">Unsubscribe</button>\n        <button *ngIf="status_friend == \'2\'" ion-button color="danger" (click)="DontAdd()">Don\'t Add</button>\n        <button *ngIf="status_friend == \'3\'" ion-button color="secondary" (click)="AddOldFriend()">Add to Friend </button>\n      </div>\n\n      </ion-item>\n\n      <ion-item *ngIf="status == \'1\'">\n          <ion-icon name="person" ></ion-icon>\n          <ion-label>\n            <p>{{phone_eng}}</p>\n          \n            <h2>{{phone}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item *ngIf="status == \'1\'">\n            <ion-icon name="person" ></ion-icon>\n            <ion-label>\n                <p>{{bithday_eng}}</p>\n              <h2>{{bithday}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf="status == \'1\'">\n              <ion-icon name="person" ></ion-icon>\n              <ion-label>\n                  <p>{{home_adress_eng}}</p>\n                <h2>{{home_adress}}</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item *ngIf="status == \'1\'">\n                <ion-icon name="person" ></ion-icon>\n                <ion-label>\n                    <p>{{mail_adress_eng}}</p>\n                  <h2>{{mail_adress}}</h2>\n                </ion-label>\n              </ion-item>\n\n              <button ion-item (click)="moveToGiftProfile(ides)"> \n                  <ion-icon ios="ios-briefcase" md="md-briefcase" item-start></ion-icon>\n                  {{gift_eng}}\n                </button>\n  \n\n                <button  ion-item (click)="moveToFriendsPage(ides)">\n                    <ion-icon name="man" item-start></ion-icon>\n                    {{friends_eng}}\n                    <ion-badge item-end>{{friends}}</ion-badge>\n                  </button>\n\n                \n\n                  <button ion-item (click)="moveToGroupPage(ides)">\n                      <ion-icon name="people" item-start></ion-icon>\n                      {{groups_eng}}\n                      <ion-badge item-end>{{groups}}</ion-badge>\n                    </button>\n\n                    <button ion-item (click)="moveToWishList(ides)">\n                        <ion-icon name="bowtie" item-start></ion-icon>\n                        {{wishlist_eng}}\n                        <ion-badge item-end>{{wishlist}}</ion-badge>\n                      </button>\n\n                      <button  ion-item (click)="moveToEvents(ides)">\n                          <ion-icon name="bookmarks" item-start></ion-icon>\n                          {{events_lang}}\n                          <ion-badge item-end>{{events}}</ion-badge>\n                        </button>\n\n                        <button  ion-item (click)="moveToProducts()"> \n                          <ion-icon name="briefcase" item-start></ion-icon>\n                          {{product_eng}}\n                          <ion-badge item-end>{{products}}</ion-badge>\n                        </button>\n\n\n                        <button ion-item (click)="moveToFav(ides)">\n                          <ion-icon ios="ios-bulb" md="md-bulb" item-start></ion-icon>\n                          {{fav_list_eng}}\n                          <ion-badge item-end>{{fav_list}}</ion-badge>\n                        </button>\n\n\n                  <ion-item text-center>\n                      <div class="soc_type">\n                       \n\n                          <a href="{{fb}}" > <img *ngIf=" fb != \'\' && fb != null" style="width: 30px;" src="assets/imgs/facebook.png"></a>\n                          <img *ngIf=" fb == \'\' || fb == null"  style="opacity: 0.5; width: 30px;" src="assets/imgs/facebook.png">\n                          <img *ngIf=" google == \'\' || google ==null"  style="opacity: 0.5;width: 30px;" src="assets/imgs/google-plus.png">\n                          <a href="{{google}}">   <img *ngIf=" google != \'\' &&  google !=null "   style="width: 30px;" src="assets/imgs/google-plus.png"></a>\n          \n          \n                          <a href="{{inst}}">  <img *ngIf=" inst != \'\' && inst != null"  style="width: 30px;" src="assets/imgs/instagram.png"></a>\n                          <img *ngIf=" inst == \'\' || inst == null"  style="opacity: 0.5;width: 30px;" src="assets/imgs/instagram.png">\n                          <a href="{{twit}}">  <img *ngIf=" twit != \'\' && twit != null"  style="width: 30px;" src="assets/imgs/twitter.png"></a>\n                          <img *ngIf=" twit == \'\' || twit == null"  style="opacity: 0.5;width: 30px;" src="assets/imgs/twitter.png">\n                      </div>\n                    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the GalleryViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryViewPage = /** @class */ (function () {
    function GalleryViewPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.dev = [];
        this.devs = {};
        this.items_dota = [];
        this.loginData = { title: '', image: '', desc: '', date: '' };
        this.ids = navParams.get('id');
        this.presentLoadingDefault();
        this.url = "http://api.givet.co.uk/api/info_gallery.php?gallery_id=" + this.ids;
        this.getData();
    }
    GalleryViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    GalleryViewPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            //  this.items = data;
            _this.image = data['image'];
            _this.desc = data['desc'];
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    GalleryViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-gallery-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\gallery-view\gallery-view.html"*/'<!--\n  Generated template for the ArticleViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Gallery</ion-title>\n  \n     \n    </ion-navbar>\n  \n  </ion-header>\n  \n\n\n<ion-content >\n\n\n    <ion-card >\n        <img *ngIf=" image!=null " src="http://api.givet.co.uk/backend/web/img/categories/{{image}}"/>\n        <img *ngIf="image==null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n        <ion-card-content>\n       \n\n          <p  [innerHtml]="desc">\n           \n          </p>\n        </ion-card-content>\n\n       \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\gallery-view\gallery-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], GalleryViewPage);
    return GalleryViewPage;
}());

//# sourceMappingURL=gallery-view.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_friends_social_friends__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_giftprofile_user_giftprofile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_friends_user_friends__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_groups_user_groups__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_wishlist_user_wishlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_events_user_events__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_favlist_user_favlist__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the ModalProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalProfilePage = /** @class */ (function () {
    function ModalProfilePage(navCtrl, platform, params, viewCtrl, http, alertCtrl, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.ides = params.get('ides');
        this.loadDB();
    }
    ModalProfilePage.prototype.leav = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Would you like to delete this user?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        _this.DelFriend();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    ModalProfilePage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.profile = data['profile'];
                _this.phone_eng = data['number'];
                _this.bithday_eng = data['bithday'];
                _this.home_adress_eng = data['home'];
                _this.mail_adress_eng = data['mail'];
                _this.gift_eng = data['gift'];
                _this.friends_eng = data['friend'];
                _this.groups_eng = data['groups'];
                _this.wishlist_eng = data['wishlist'];
                _this.events_lang = data['event'];
                _this.fav_list_eng = data['fav'];
                _this.product_eng = data['product'];
            });
            _this.url = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.ides;
            _this.getData();
        });
    };
    ModalProfilePage.prototype.moveToProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], {
            id: this.ides
        });
    };
    ModalProfilePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ModalProfilePage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.name = data['name'];
            _this.email = data['email'];
            _this.surename = data['surename'];
            _this.image = data['image'];
            _this.bithday = data['bithday'];
            _this.phone = data['phone'];
            _this.home_adress = data['home_adress'];
            _this.mail_adress = data['mail_adress'];
            var person = "http";
            var personRegExp = new RegExp(person);
            if (personRegExp.test(_this.image)) {
                console.log(person + " is a philosopher.");
                _this.test = '1';
            }
            else {
                console.log(person + " is NOT a philosopher.");
            }
            _this.url_friend = "http://api.givet.co.uk/api/check_friend.php?user_id_1=" + _this.user_id_2 + "&user_id_2=" + _this.ides;
            _this.data_friend = _this.http.get(_this.url_friend);
            _this.data_friend.subscribe(function (data_friend) {
                if (data_friend['status'] != "400 OK") {
                    _this.status = data_friend['status'];
                }
                _this.url_friend2 = "http://api.givet.co.uk/api/check_friend.php?user_id_1=" + _this.ides + "&user_id_2=" + _this.user_id_2;
                _this.data_friend2 = _this.http.get(_this.url_friend2);
                _this.data_friend2.subscribe(function (data_friend2) {
                    if (data_friend2['status'] != "400 OK") {
                        _this.status_friend = data_friend2['status'];
                    }
                    _this.url_count = "http://api.givet.co.uk/api/count_user.php?user_id=" + _this.ides;
                    _this.data_count = _this.http.get(_this.url_count);
                    _this.data_count.subscribe(function (data_count) {
                        _this.events = data_count['events'];
                        _this.wishlist = data_count['wishlist'];
                        _this.fav_list = data_count['fav_list'];
                        _this.groups = data_count['groups'];
                        _this.friends = data_count['friends'];
                        _this.products = data_count['products'];
                        _this.url_soc = "http://api.givet.co.uk/api/get_social.php?user_id=" + _this.ides;
                        _this.data_soc = _this.http.get(_this.url_soc);
                        _this.data_soc.subscribe(function (data_soc) {
                            for (var _i = 0, data_soc_1 = data_soc; _i < data_soc_1.length; _i++) {
                                var item = data_soc_1[_i];
                                if (item['soc_type'] == "twit") {
                                    _this.twit = item['link'];
                                }
                                else if (item['soc_type'] == "google") {
                                    _this.google = item['link'];
                                }
                                else if (item['soc_type'] == "inst") {
                                    _this.inst = item['link'];
                                }
                                else if (item['soc_type'] == "fb") {
                                    _this.fb = item['link'];
                                }
                            }
                        });
                    });
                });
            });
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalProfilePage.prototype.moveToGiftProfile = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_giftprofile_user_giftprofile__["a" /* UserGiftprofilePage */], {
            id: this.ides
        });
    };
    ModalProfilePage.prototype.moveToFriendsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_friends_user_friends__["a" /* UserFriendsPage */], {
            id: this.ides
        });
    };
    ModalProfilePage.prototype.moveToGroupPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_groups_user_groups__["a" /* UserGroupsPage */], {
            id: this.ides
        });
    };
    ModalProfilePage.prototype.moveToWishList = function (id) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__user_wishlist_user_wishlist__["a" /* UserWishlistPage */], {
            id: this.ides
        });
    };
    ModalProfilePage.prototype.moveToEvents = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__user_events_user_events__["a" /* UserEventsPage */], {
            id: this.ides
        });
    };
    ModalProfilePage.prototype.moveToFav = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__user_favlist_user_favlist__["a" /* UserFavlistPage */], {
            id: this.ides
        });
    };
    ModalProfilePage.prototype.moveToSocialFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__social_friends_social_friends__["a" /* SocialFriendsPage */]);
    };
    ModalProfilePage.prototype.AddNew = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '1');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.NotWait = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '2');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.AllAccess = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '3');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.DelFriend = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '4');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */], {
                    id: _this.user_id_2
                });
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.Unsibr = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '5');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.DontAdd = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '6');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.AddOldFriend = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_1', this.user_id_2);
        postData.append('user_id_2', this.ides);
        postData.append('add', '7');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.navCtrl.pop();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    ModalProfilePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    ModalProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\modal-profile\modal-profile.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n          {{name}}\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n        <ion-item>\n          <ion-avatar item-start>\n              <img class="goga" *ngIf=" test != null" src="{{image}}">\n              <img class="goga" *ngIf=" test == null" src="https://givet.co.uk/backend/web/images/users/{{image}}">\n          </ion-avatar>\n          <h2>{{name}} {{surename}}</h2>\n          <p>{{email}}</p>\n          \n          <div *ngIf="ides!=user_id_2">\n          <button *ngIf="status == null && status_friend ==null" ion-button color="secondary" (click)="AddNew()">Add to Friend </button>\n          <button *ngIf="status == \'2\'" ion-button style="background-color: #f39c12" (click)="NotWait()">Stop Waiting...</button>\n          <button *ngIf="status_friend == \'2\'" ion-button color="secondary" (click)="AllAccess()">Add Friend </button>\n          <button *ngIf="status == \'1\'" ion-button color="danger" (click)="leav()">Remove Friend</button>\n          <button *ngIf="status == \'3\'" ion-button style="background-color: #f39c12" (click)="Unsibr()">Unsubscribe</button>\n          <button *ngIf="status_friend == \'2\'" ion-button color="danger" (click)="DontAdd()">Don\'t Add</button>\n          <button *ngIf="status_friend == \'3\'" ion-button color="secondary" (click)="AddOldFriend()">Add to Friend </button>\n        </div>\n\n        </ion-item>\n  \n        <ion-item>\n            <ion-icon name="person" ></ion-icon>\n            <ion-label>\n              <p>{{phone_eng}}</p>\n            \n              <h2>{{phone}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-icon name="person" ></ion-icon>\n              <ion-label>\n                  <p>{{bithday_eng}}</p>\n                <h2>{{bithday}}</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="person" ></ion-icon>\n                <ion-label>\n                    <p>{{home_adress_eng}}</p>\n                  <h2>{{home_adress}}</h2>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                  <ion-icon name="person" ></ion-icon>\n                  <ion-label>\n                      <p>{{mail_adress_eng}}</p>\n                    <h2>{{mail_adress}}</h2>\n                  </ion-label>\n                </ion-item>\n\n                <button ion-item (click)="moveToGiftProfile(ides)"> \n                    <ion-icon ios="ios-briefcase" md="md-briefcase" item-start></ion-icon>\n                    {{gift_eng}}\n                  </button>\n    \n\n                  <button  ion-item (click)="moveToFriendsPage(ides)">\n                      <ion-icon name="man" item-start></ion-icon>\n                      {{friends_eng}}\n                      <ion-badge item-end>{{friends}}</ion-badge>\n                    </button>\n\n                  \n\n                    <button ion-item (click)="moveToGroupPage(ides)">\n                        <ion-icon name="people" item-start></ion-icon>\n                        {{groups_eng}}\n                        <ion-badge item-end>{{groups}}</ion-badge>\n                      </button>\n\n                      <button ion-item (click)="moveToWishList(ides)">\n                          <ion-icon name="bowtie" item-start></ion-icon>\n                          {{wishlist_eng}}\n                          <ion-badge item-end>{{wishlist}}</ion-badge>\n                        </button>\n\n                        <button  ion-item (click)="moveToEvents(ides)">\n                            <ion-icon name="bookmarks" item-start></ion-icon>\n                            {{events_lang}}\n                            <ion-badge item-end>{{events}}</ion-badge>\n                          </button>\n\n                          <button  ion-item (click)="moveToProducts()"> \n                            <ion-icon name="briefcase" item-start></ion-icon>\n                            {{product_eng}}\n                            <ion-badge item-end>{{products}}</ion-badge>\n                          </button>\n\n\n                          <button ion-item (click)="moveToFav(ides)">\n                            <ion-icon ios="ios-bulb" md="md-bulb" item-start></ion-icon>\n                            {{fav_list_eng}}\n                            <ion-badge item-end>{{fav_list}}</ion-badge>\n                          </button>\n\n\n                    <ion-item text-center>\n                        <div class="soc_type">\n                         \n\n                            <a href="{{fb}}" > <img *ngIf=" fb != \'\' && fb != null" style="width: 30px;" src="assets/imgs/facebook.png"></a>\n                            <img *ngIf=" fb == \'\' || fb == null"  style="opacity: 0.5; width: 30px;" src="assets/imgs/facebook.png">\n                            <img *ngIf=" google == \'\' || google ==null"  style="opacity: 0.5;width: 30px;" src="assets/imgs/google-plus.png">\n                            <a href="{{google}}">   <img *ngIf=" google != \'\' &&  google !=null "   style="width: 30px;" src="assets/imgs/google-plus.png"></a>\n            \n            \n                            <a href="{{inst}}">  <img *ngIf=" inst != \'\' && inst != null"  style="width: 30px;" src="assets/imgs/instagram.png"></a>\n                            <img *ngIf=" inst == \'\' || inst == null"  style="opacity: 0.5;width: 30px;" src="assets/imgs/instagram.png">\n                            <a href="{{twit}}">  <img *ngIf=" twit != \'\' && twit != null"  style="width: 30px;" src="assets/imgs/twitter.png"></a>\n                            <img *ngIf=" twit == \'\' || twit == null"  style="opacity: 0.5;width: 30px;" src="assets/imgs/twitter.png">\n                        </div>\n                      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\modal-profile\modal-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], ModalProfilePage);
    return ModalProfilePage;
}());

//# sourceMappingURL=modal-profile.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_wish_list_wish_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_events_events__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_my_profile_my_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_groups_groups__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_lists_my_lists__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forget_forget__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_photo_viewer__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_gift_profile_gift_profile__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_friends_friends__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_social_friends_social_friends__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_setting_profile_setting_profile__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_wishlist_view_wishlist_view__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_wishlist_update_wishlist_update__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_wishlist_create_wishlist_create__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_setting_gift_profile_setting_gift_profile__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_modal_profile_modal_profile__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_favorite_update_favorite_update__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_favorite_create_favorite_create__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_favorite_view_favorite_view__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_groups_update_groups_update__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_groups_create_groups_create__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_groups_view_groups_view__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_events_view_events_view__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_events_create_events_create__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_events_update_events_update__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_user_giftprofile_user_giftprofile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_user_friends_user_friends__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_user_groups_user_groups__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_user_wishlist_user_wishlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_user_events_user_events__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_user_favlist_user_favlist__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_add_users_add_users__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ionic2_rating__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ionic3_star_rating__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_firebase__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_storage__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_http__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_file__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_sqlite_porter__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_file_transfer__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_products_products__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_products_create_products_create__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_products_update_products_update__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_products_view_products_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_select_product_select_product__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_select_event_select_event__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_global_product_global_product__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_global_user_global_user__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_gallery_gallery__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_articles_articles__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_article_view_article_view__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_gallery_view_gallery_view__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































































__WEBPACK_IMPORTED_MODULE_48_firebase___default.a.initializeApp({
    apiKey: "AIzaSyAZRlslDJZa0VHgOSmdbobJJjy4I4QFroY",
    authDomain: "givet-220516.firebaseapp.com",
    databaseURL: "https://givet-220516.firebaseio.com",
    projectId: "givet-220516",
    storageBucket: "givet-220516.appspot.com",
    messagingSenderId: "114192688377"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_select_product_select_product__["a" /* SelectProductPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_lists_my_lists__["a" /* MyListsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forget_forget__["a" /* ForgetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_gift_profile_gift_profile__["a" /* GiftProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_social_friends_social_friends__["a" /* SocialFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_setting_profile_setting_profile__["a" /* SettingProfilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_wishlist_view_wishlist_view__["a" /* WishlistViewPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_wishlist_update_wishlist_update__["a" /* WishlistUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_wishlist_create_wishlist_create__["a" /* WishlistCreatePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_setting_gift_profile_setting_gift_profile__["a" /* SettingGiftProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_modal_profile_modal_profile__["a" /* ModalProfilePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_favorite_create_favorite_create__["a" /* FavoriteCreatePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_favorite_update_favorite_update__["a" /* FavoriteUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_favorite_view_favorite_view__["a" /* FavoriteViewPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_groups_update_groups_update__["a" /* GroupsUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_groups_create_groups_create__["a" /* GroupsCreatePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_groups_view_groups_view__["a" /* GroupsViewPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_events_view_events_view__["a" /* EventsViewPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_select_event_select_event__["a" /* SelectEventPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_events_create_events_create__["a" /* EventsCreatePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_events_update_events_update__["a" /* EventsUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_user_giftprofile_user_giftprofile__["a" /* UserGiftprofilePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_user_friends_user_friends__["a" /* UserFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_user_groups_user_groups__["a" /* UserGroupsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_user_wishlist_user_wishlist__["a" /* UserWishlistPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_user_events_user_events__["a" /* UserEventsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_user_favlist_user_favlist__["a" /* UserFavlistPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_products_create_products_create__["a" /* ProductsCreatePage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_products_update_products_update__["a" /* ProductsUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_products_view_products_view__["a" /* ProductsViewPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_add_users_add_users__["a" /* AddUsersPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_global_product_global_product__["a" /* GlobalProductPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_global_user_global_user__["a" /* GlobalUserPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_article_view_article_view__["a" /* ArticleViewPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_gallery_view_gallery_view__["a" /* GalleryViewPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_articles_articles__["a" /* ArticlesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_47_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_52__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/article-view/article-view.module#ArticleViewPageModule', name: 'ArticleViewPage', segment: 'article-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-users/add-users.module#AddUsersPageModule', name: 'AddUsersPage', segment: 'add-users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/articles/articles.module#ArticlesPageModule', name: 'ArticlesPage', segment: 'articles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events-create/events-create.module#EventsCreatePageModule', name: 'EventsCreatePage', segment: 'events-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events-update/events-update.module#EventsUpdatePageModule', name: 'EventsUpdatePage', segment: 'events-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events-view/events-view.module#EventsViewPageModule', name: 'EventsViewPage', segment: 'events-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-view/favorite-view.module#FavoriteViewPageModule', name: 'FavoriteViewPage', segment: 'favorite-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-update/favorite-update.module#FavoriteUpdatePageModule', name: 'FavoriteUpdatePage', segment: 'favorite-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery-view/gallery-view.module#GalleryViewPageModule', name: 'GalleryViewPage', segment: 'gallery-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gift-profile/gift-profile.module#GiftProfilePageModule', name: 'GiftProfilePage', segment: 'gift-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/global-product/global-product.module#GlobalProductPageModule', name: 'GlobalProductPage', segment: 'global-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gift-list/gift-list.module#GiftListPageModule', name: 'GiftListPage', segment: 'gift-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/global-user/global-user.module#GlobalUserPageModule', name: 'GlobalUserPage', segment: 'global-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups-create/groups-create.module#GroupsCreatePageModule', name: 'GroupsCreatePage', segment: 'groups-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups-update/groups-update.module#GroupsUpdatePageModule', name: 'GroupsUpdatePage', segment: 'groups-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups-view/groups-view.module#GroupsViewPageModule', name: 'GroupsViewPage', segment: 'groups-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my.module#MyPageModule', name: 'MyPage', segment: 'my', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups/groups.module#GroupsPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-profile/modal-profile.module#ModalProfilePageModule', name: 'ModalProfilePage', segment: 'modal-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products-create/products-create.module#ProductsCreatePageModule', name: 'ProductsCreatePage', segment: 'products-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-create/favorite-create.module#FavoriteCreatePageModule', name: 'FavoriteCreatePage', segment: 'favorite-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-lists/my-lists.module#MyListsPageModule', name: 'MyListsPage', segment: 'my-lists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products-update/products-update.module#ProductsUpdatePageModule', name: 'ProductsUpdatePage', segment: 'products-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products-view/products-view.module#ProductsViewPageModule', name: 'ProductsViewPage', segment: 'products-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-product/select-product.module#SelectProductPageModule', name: 'SelectProductPage', segment: 'select-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-event/select-event.module#SelectEventPageModule', name: 'SelectEventPage', segment: 'select-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-profile/setting-profile.module#SettingProfilePageModule', name: 'SettingProfilePage', segment: 'setting-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-gift-profile/setting-gift-profile.module#SettingGiftProfilePageModule', name: 'SettingGiftProfilePage', segment: 'setting-gift-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-friends/social-friends.module#SocialFriendsPageModule', name: 'SocialFriendsPage', segment: 'social-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-events/user-events.module#UserEventsPageModule', name: 'UserEventsPage', segment: 'user-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-favlist/user-favlist.module#UserFavlistPageModule', name: 'UserFavlistPage', segment: 'user-favlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-giftprofile/user-giftprofile.module#UserGiftprofilePageModule', name: 'UserGiftprofilePage', segment: 'user-giftprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-friends/user-friends.module#UserFriendsPageModule', name: 'UserFriendsPage', segment: 'user-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wish-list/wish-list.module#WishListPageModule', name: 'WishListPage', segment: 'wish-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-groups/user-groups.module#UserGroupsPageModule', name: 'UserGroupsPage', segment: 'user-groups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-wishlist/user-wishlist.module#UserWishlistPageModule', name: 'UserWishlistPage', segment: 'user-wishlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishlist-create/wishlist-create.module#WishlistCreatePageModule', name: 'WishlistCreatePage', segment: 'wishlist-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishlist-update/wishlist-update.module#WishlistUpdatePageModule', name: 'WishlistUpdatePage', segment: 'wishlist-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishlist-view/wishlist-view.module#WishlistViewPageModule', name: 'WishlistViewPage', segment: 'wishlist-view', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_46_ionic2_rating__["a" /* Ionic2RatingModule */] // Put ionic2-rating module here
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_article_view_article_view__["a" /* ArticleViewPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_global_product_global_product__["a" /* GlobalProductPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_global_user_global_user__["a" /* GlobalUserPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_articles_articles__["a" /* ArticlesPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_gallery_view_gallery_view__["a" /* GalleryViewPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_products_create_products_create__["a" /* ProductsCreatePage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_products_update_products_update__["a" /* ProductsUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_products_view_products_view__["a" /* ProductsViewPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_select_event_select_event__["a" /* SelectEventPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_lists_my_lists__["a" /* MyListsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_select_product_select_product__["a" /* SelectProductPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forget_forget__["a" /* ForgetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_gift_profile_gift_profile__["a" /* GiftProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_social_friends_social_friends__["a" /* SocialFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_setting_profile_setting_profile__["a" /* SettingProfilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_wishlist_view_wishlist_view__["a" /* WishlistViewPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_wishlist_update_wishlist_update__["a" /* WishlistUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_wishlist_create_wishlist_create__["a" /* WishlistCreatePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_setting_gift_profile_setting_gift_profile__["a" /* SettingGiftProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_modal_profile_modal_profile__["a" /* ModalProfilePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_favorite_create_favorite_create__["a" /* FavoriteCreatePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_favorite_update_favorite_update__["a" /* FavoriteUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_favorite_view_favorite_view__["a" /* FavoriteViewPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_groups_update_groups_update__["a" /* GroupsUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_groups_create_groups_create__["a" /* GroupsCreatePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_groups_view_groups_view__["a" /* GroupsViewPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_events_view_events_view__["a" /* EventsViewPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_events_create_events_create__["a" /* EventsCreatePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_events_update_events_update__["a" /* EventsUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_user_giftprofile_user_giftprofile__["a" /* UserGiftprofilePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_user_friends_user_friends__["a" /* UserFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_user_groups_user_groups__["a" /* UserGroupsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_user_wishlist_user_wishlist__["a" /* UserWishlistPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_user_events_user_events__["a" /* UserEventsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_user_favlist_user_favlist__["a" /* UserFavlistPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_add_users_add_users__["a" /* AddUsersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_50__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                __WEBPACK_IMPORTED_MODULE_50__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_update_events_update__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlist_view_wishlist_view__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wishlist_create_wishlist_create__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_event_select_event__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_events__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the EventsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsViewPage = /** @class */ (function () {
    function EventsViewPage(navCtrl, navParams, modalCtrl, http, alertCtrl, loadingCtrl, databaseProvider, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.socialSharing = socialSharing;
        this.dev = [];
        this.devs = {};
        this.items_dota = [];
        this.loginData = { title: '' };
        this.ids = navParams.get('id');
    }
    EventsViewPage_1 = EventsViewPage;
    EventsViewPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    EventsViewPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['lang_id'];
                _this.delete_lang = data['del'];
            });
            _this.url228 = "http://api.givet.co.uk/api/get_wish_from_event.php?event_id=" + _this.ids;
            _this.data_products = _this.http.get(_this.url228);
            _this.data_products.subscribe(function (data_new) {
                // this.data_products = data_new;
                if (data_new['status'] != "400 OK") {
                    _this.items_dota = data_new;
                }
                else if (data_new['status'] == "400 OK") {
                    _this.items_dota = null;
                }
            });
            _this.url = "http://api.givet.co.uk/api/info_events.php?event_id=" + _this.ids;
            _this.getData();
        });
        // this.loading.dismiss();
    };
    EventsViewPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wishlist_view_wishlist_view__["a" /* WishlistViewPage */], {
            id: item['id'],
            res: 2,
            id_wish: this.ids
        });
    };
    EventsViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    EventsViewPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.name = data['name'];
            _this.loginData.title = data['name'];
            _this.description = data['description'];
            _this.date = data['date'];
            _this.time = data['time'];
            _this.repeat = data['repeat'];
            _this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id_2;
            _this.data_user = _this.http.get(_this.url_user);
            _this.data_user.subscribe(function (data_user) {
                _this.user_name = data_user['name'];
                _this.user_email = data_user['email'];
                _this.user_surename = data_user['surename'];
                _this.user_image = data_user['image'];
                var person = "http";
                var personRegExp = new RegExp(person);
                if (personRegExp.test(_this.user_image)) {
                    console.log(person + " is a philosopher.");
                    _this.test = '1';
                }
                else {
                    console.log(person + " is NOT a philosopher.");
                }
                _this.loading.dismiss();
            });
        });
    };
    EventsViewPage.prototype.openModalFriend = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Selection',
            message: 'Choose an option?',
            buttons: [
                {
                    text: 'Choose from created',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__select_event_select_event__["a" /* SelectEventPage */], {
                            event_id: _this.ids
                        });
                    }
                },
                {
                    text: 'Create new',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wishlist_create_wishlist_create__["a" /* WishlistCreatePage */], {
                            status: 1,
                            event_id: _this.ids
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    EventsViewPage.prototype.share = function () {
        // Check if sharing via email is supported
        this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/event_page&id=" + this.ids).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    EventsViewPage.prototype.del = function (item) {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/delete_wish_from_event.php";
        var postData = new FormData();
        postData.append('event_id', this.ids);
        postData.append('wish_id', item.id);
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            _this.loading.dismiss();
            _this.navCtrl.setRoot(EventsViewPage_1, { id: _this.ids });
        });
    };
    EventsViewPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete',
            message: 'Do you want to delete this event?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.presentLoadingDefault();
                        var url = "http://api.givet.co.uk/api/delete_event.php";
                        var postData = new FormData();
                        postData.append('event_id', id);
                        _this.data = _this.http.post(url, postData);
                        _this.data.subscribe(function (data) {
                            if (data['event']['status'] == "OK") {
                                _this.loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__events_events__["a" /* EventsPage */], { reset: 1 });
                            }
                            else {
                                _this.loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__events_events__["a" /* EventsPage */], { reset: 1 });
                            }
                            console.log(data);
                        });
                    }
                }
            ]
        });
        alert.present();
        this.loading.dismiss();
    };
    EventsViewPage.prototype.moToCreate = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_update_events_update__["a" /* EventsUpdatePage */], {
            id: id
        });
    };
    EventsViewPage.prototype.openModal = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: id
        });
    };
    EventsViewPage = EventsViewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-events-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events-view\events-view.html"*/'<!--\n  Generated template for the WishlistViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ (loginData.title | slice:0:15) + (loginData.title.length > 15 ? \'...\' : \'\')}}</ion-title>\n  \n      <ion-buttons *ngIf=" user_id == user_id_2 "end>\n          <button ion-button icon-only (click)="moToCreate(ids)">\n            <ion-icon name="ios-create-outline"></ion-icon>\n          </button>\n  \n          <button ion-button icon-only (click)="presentConfirm(ids)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n\n\n  \n  <ion-content >\n  \n  \n      <ion-card>\n  \n          <ion-item>\n           \n            <h2>{{name}}</h2>\n            <span *ngIf="repeat == \'0\'" class="label label-info">Weekly</span>\n            <span *ngIf="	repeat == \'1\'" class="label label-info">Monthly</span> \n            <span *ngIf="repeat == \'2\'" class="label label-info">Yearly</span>\n            <span *ngIf="	repeat == \'3\'" class="label label-info">One Time</span>\n          </ion-item>\n        \n          <ion-item (click)="openModal(user_id)">\n            <ion-avatar item-start>\n                <img class="goga" *ngIf=" test != null" src="{{user_image}}">\n              <img class="goga" *ngIf=" test == null && user_image!=null" src="https://givet.co.uk/backend/web/images/users/{{user_image}}">\n              <img *ngIf="test == null && user_image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n            </ion-avatar>\n            <h2>{{user_name}} {{user_surename}}</h2>\n            <p>{{user_email}}</p>\n          </ion-item>\n        \n          <ion-card-content>\n            <p [innerHtml]="description"></p>\n          </ion-card-content>\n\n          \n          <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="ios-time-outline"></ion-icon>\n                  <div>{{time}}</div>\n                </button>\n              </ion-col>\n\n              <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon name="md-calendar"></ion-icon>\n                    <div>{{date}}</div>\n                  </button>\n                </ion-col>\n\n\n             \n              \n            </ion-row>\n\n            <ion-item >\n                <button ion-button (click)="share()">Share</button>\n            </ion-item>\n        \n        </ion-card>\n\n\n        <ion-list style="margin-bottom: 15px">\n\n            <ion-card>\n\n                  <div class="item" >\n                 \n                      <h2 style="padding: 20px;" float-left> Wishlists</h2>\n                     \n\n                  \n    \n                        \n                <ion-buttons  *ngIf="user_id==user_id_2 "  style="    padding: 10px;" float-right>\n                    <button ion-button icon-only (click)="openModalFriend()">\n                      <ion-icon name="add"></ion-icon>\n                    </button>\n                    \n                  </ion-buttons>\n                    </div>\n\n            </ion-card>\n                \n            <ion-col *ngFor="let item of items_dota"  no-padding>\n\n                <ion-card *ngIf=" item.type != \'0\' || user_id == user_id_2">\n                    \n\n                    <ion-item>\n                        <ion-avatar item-start>\n                         \n                            <img *ngIf="item.image != null" src="https://givet.co.uk/backend/web/images/{{item.image}}"/>\n                            <img *ngIf="item.image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n                          </ion-avatar>\n\n\n                          <ion-card-header class="bot-pd" (click)="moToView(item)">\n                              {{item.title}}\n                               \n                             </ion-card-header>\n                             \n                          </ion-item>\n                 \n      \n                  \n      \n                     \n              <ion-card-header class="no-mg" (click)="moToView(item)">\n        \n                  <span *ngIf=" item.type == \'0\'" class="label label-danger">                  \n                      Private</span> \n                      <span *ngIf=" item.type == \'1\'" class="label label-warning">                  \n                          Shared</span> \n                          <span *ngIf=" item.type == \'2\'" class="label label-success">                  \n                              Public</span> \n                  \n                </ion-card-header>\n                    \n              \n\n                    <ion-card-content (click)="moToView(item)" class="fixline" [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\')">\n                     \n                    </ion-card-content>\n\n\n                            \n                    <ion-card-header class="bot-pd" style="margin-bottom: 7px" *ngIf="user_id == user_id_2">\n                      <button ion-button color="danger" (click)="del(item)">{{delete_lang}}</button>\n                       \n                     </ion-card-header>\n                  \n                  </ion-card>\n      \n            </ion-col>\n          \n        \n\n          </ion-list>\n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events-view\events-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], EventsViewPage);
    return EventsViewPage;
    var EventsViewPage_1;
}());

//# sourceMappingURL=events-view.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_update_products_update__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProductsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsViewPage = /** @class */ (function () {
    function ProductsViewPage(navCtrl, navParams, modalCtrl, http, alertCtrl, loadingCtrl, databaseProvider, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.socialSharing = socialSharing;
        this.dev = [];
        this.devs = {};
        this.result = [];
        this.loginData = { title: '' };
        this.ids = navParams.get('id');
        this.loadDB();
    }
    ProductsViewPage.prototype.moToCreate = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_update_products_update__["a" /* ProductsUpdatePage */], {
            id: id
        });
    };
    ProductsViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ProductsViewPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/info_product.php?fav_id=" + _this.ids;
            _this.getData();
        });
    };
    ProductsViewPage.prototype.share = function () {
        // Check if sharing via email is supported
        this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/product_page&select=product&id=" + this.ids).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    ProductsViewPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.name = data['name'];
            _this.loginData.title = data['name'];
            _this.info = data['details'];
            _this.rating = data['rating'];
            _this.title = data['title'];
            _this.link = data['link'];
            _this.price = data['price'];
            _this.quatnit = data['quan'];
            _this.where_buy = data['where_buy'];
            _this.image = data['image'];
            var person = "http";
            var personRegExp = new RegExp(person);
            if (personRegExp.test(_this.image)) {
                console.log(person + " is a philosopher.");
                _this.test_2 = '1';
            }
            else {
                console.log(person + " is NOT a philosopher.");
            }
            var person2 = "amazon";
            _this.personRegExp = new RegExp(person2);
            if (personRegExp.test(_this.link)) {
                console.log(person2 + " is a philosopher.");
                _this.check_link = '1';
            }
            else {
                console.log(person2 + " is NOT a philosopher.");
            }
            _this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id;
            _this.data_user = _this.http.get(_this.url_user);
            _this.data_user.subscribe(function (data_user) {
                _this.user_name = data_user['name'];
                _this.user_email = data_user['email'];
                _this.user_surename = data_user['surename'];
                _this.user_image = data_user['image'];
                var person = "http";
                var personRegExp = new RegExp(person);
                if (personRegExp.test(_this.user_image)) {
                    console.log(person + " is a philosopher.");
                    _this.test = '1';
                }
                else {
                    console.log(person + " is NOT a philosopher.");
                }
                _this.loading.dismiss();
            });
        });
        this.loading.dismiss();
    };
    ProductsViewPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete',
            message: 'Do you want to delete this product?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.presentLoadingDefault();
                        var url = "http://api.givet.co.uk/api/delete_product.php";
                        var postData = new FormData();
                        postData.append('fav_id', id);
                        _this.data = _this.http.post(url, postData);
                        _this.data.subscribe(function (data) {
                            if (data['product']['status'] == "OK") {
                                _this.loading.dismiss();
                                _this.navCtrl.pop();
                                // this.navCtrl.setRoot(ProductsPage,{reset:1});
                            }
                            else {
                                _this.loading.dismiss();
                                _this.navCtrl.pop();
                                // this.navCtrl.setRoot(ProductsPage,{reset:1});
                            }
                            console.log(data);
                        });
                        _this.loading.dismiss();
                        //this.navCtrl.pop();
                        //  this.navCtrl.setRoot(ProductsPage,{reset:1});
                    }
                }
            ]
        });
        alert.present();
    };
    ProductsViewPage.prototype.openModal = function (user_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: user_id
        });
    };
    ProductsViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products-view\products-view.html"*/'<!--\n  Generated template for the WishlistViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ (loginData.title | slice:0:15) + (loginData.title.length > 15 ? \'...\' : \'\')}} </ion-title>\n\n    <ion-buttons *ngIf=" user_id == user_id_2" end>\n        <button ion-button icon-only (click)="moToCreate(ids)">\n          <ion-icon name="ios-create-outline"></ion-icon>\n        </button>\n\n        <button ion-button icon-only (click)="presentConfirm(ids)">\n            <ion-icon name="trash" ></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n    <ion-card>\n\n        <ion-item>\n         \n          <h2>{{name}}</h2>\n          <p>{{title}}</p>\n          <ion-card-header *ngIf=" rating == \'0\'" class="no-mg" style="\n          padding-left: 0px;\n          padding-bottom: 5px;\n      ">\n              <ion-icon name="star" class=" unchecked"></ion-icon>\n              <ion-icon name="star" class=" unchecked"></ion-icon>\n              <ion-icon name="star" class=" unchecked"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n            </ion-card-header>\n\n            <ion-card-header *ngIf=" rating == \'1\'" class="no-mg" style="\n          padding-left: 0px;\n          padding-bottom: 5px;\n      ">\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" unchecked"></ion-icon>\n              <ion-icon name="star" class=" unchecked"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n            </ion-card-header>\n\n            <ion-card-header *ngIf=" rating == \'2\'" class="no-mg" style="\n          padding-left: 0px;\n          padding-bottom: 5px;\n      ">\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" unchecked"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n            </ion-card-header>\n\n            <ion-card-header *ngIf=" rating == \'3\'" class="no-mg" style="\n          padding-left: 0px;\n          padding-bottom: 5px;\n      ">\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n            </ion-card-header>\n\n            <ion-card-header *ngIf=" rating == \'4\'" class="no-mg" style="\n          padding-left: 0px;\n          padding-bottom: 5px;\n      ">\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" checked"></ion-icon>\n              <ion-icon name="star" class=" uncheck"></ion-icon>\n            </ion-card-header>\n\n            <ion-card-header *ngIf=" rating == \'5\'" class="no-mg" style="\n            padding-left: 0px;\n            padding-bottom: 5px;\n        ">\n                <ion-icon name="star" class=" checked"></ion-icon>\n                <ion-icon name="star" class=" checked"></ion-icon>\n                <ion-icon name="star" class=" checked"></ion-icon>\n                <ion-icon name="star" class=" checked"></ion-icon>\n                <ion-icon name="star" class=" checked"></ion-icon>\n              </ion-card-header>\n\n            <ion-card-header class="no-mg" style="\n            padding-left: 0px;\n            padding-bottom: 5px;\n        ">\n                <span class="label label-success" style="padding: 3px;">                  \n                    <ion-icon name="md-cash"></ion-icon> {{price}}</span> \n                \n                    <span class="label label-warning" style="padding: 3px;">                  \n                        <ion-icon name="ios-grid-outline"></ion-icon> {{quatnit}}</span> \n              </ion-card-header>\n        </ion-item>\n      \n        <img *ngIf=" test == null" src="https://givet.co.uk/backend/web/images/{{image}}">\n        <img *ngIf=" test != null" src="{{image}}">\n\n        <ion-card-content [innerHtml]="info">\n         \n        </ion-card-content>\n\n        <ion-item>\n         <a href="{{link}}" *ngIf="check_link !=null "> <button   ion-button style="background-color: indigo;color: honeydew">View on Amazon</button></a>\n         <a href="{{link}}" *ngIf="check_link ==null " >  <button  ion-button style="background-color: indigo;color: honeydew">View on website</button></a>\n\n        </ion-item>\n      \n        <ion-item (click)="openModal(user_id)" *ngIf="user_email != \'admin@admin.com\'">\n          <ion-avatar item-start>\n              <img class="goga" *ngIf=" test != null" src="{{user_image}}">\n              <img class="goga" *ngIf=" test == null" src="https://givet.co.uk/backend/web/images/users/{{user_image}}">\n          </ion-avatar>\n          <h2>{{user_name}} {{user_surename}}</h2>\n          <p>{{user_email}}</p>\n        </ion-item>\n\n\n     \n       \n\n        <ion-item >\n            <button ion-button (click)="share()">Share</button>\n        </ion-item>\n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products-view\products-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ProductsViewPage);
    return ProductsViewPage;
}());

//# sourceMappingURL=products-view.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductsCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsCreatePage = /** @class */ (function () {
    function ProductsCreatePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, events, databaseProvider, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.databaseProvider = databaseProvider;
        this.camera = camera;
        this.result = [];
        this.loginData = { name: '', info: '', buy: '', title: '', price: '', quan: '', were: '', rap: '' };
        this.dev = [];
        this.devs = {};
        this.res_user = navParams.get('res');
        this.user_id_test = navParams.get('user_id_test');
        this.status = navParams.get('status');
        if (this.status == 1) {
            this.other_id = navParams.get('wish_id');
        }
        else if (this.status == 2) {
            this.other_id = navParams.get('fav_id');
        }
        else {
            this.other_id = null;
        }
        this.loadDB();
        events.subscribe('star-rating:changed', function (starRating) {
            console.log(starRating);
            _this.rating = starRating;
        });
    }
    ProductsCreatePage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.create_prod = data['create_prod'];
                _this.image_eng = data['image'];
                _this.update_image_eng = data['update_image'];
                _this.link_eng = data['link'];
                _this.title_eng = data['title'];
                _this.name_eng = data['name'];
                _this.where_buy_eng = data['where_buy'];
                _this.price_eng = data['price'];
                _this.quantity_eng = data['quan'];
                _this.prod_cat_eng = data['prod_cat'];
                _this.desc_eng = data['description'];
                _this.rating_eng = data['rating'];
                _this.create_new_eng = data['create_new'];
                _this.fetch_eng = data['fetchs'];
            });
            _this.url = "http://api.givet.co.uk/api/get_all_cats.php";
            _this.getData();
        });
    };
    ProductsCreatePage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.items = data;
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    ProductsCreatePage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    ProductsCreatePage.prototype.search = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/fetch.php";
        var postData = new FormData();
        postData.append('url', this.loginData.buy);
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            //alert(JSON.stringify(data));
            _this.loginData.title = data['title'];
            _this.loginData.name = data['name'];
            _this.rating = data['stars'];
            _this.loginData.price = data['price'];
            _this.loginData.quan = "1";
            _this.loginData.were = data['where'];
            _this.loginData.info = data['description'];
            _this.base64Image = data['image'].trim();
            var names = data['image'].split("data:image/jpeg;base64,");
            //let firstName = names[0];
            _this.picture_new = names;
            _this.loading.dismiss();
        });
    };
    ProductsCreatePage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            //alert(imageData)
        }, function (err) {
            // Handle error
        });
    };
    ProductsCreatePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ProductsCreatePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProductsCreatePage.prototype.clickOption = function (id) {
        this.new_cout = id;
    };
    ProductsCreatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Not all fields are filled.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.test = function () {
        alert(this.picture_new);
    };
    ProductsCreatePage.prototype.save = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.loginData.title.length <= 0) {
            this.loading.dismiss();
            this.presentAlertTitle();
        }
        else if (this.loginData.name.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.info.length <= 0) {
            this.loading.dismiss();
            this.presentAlertDesc();
        }
        else if (this.loginData.price.length <= 0) {
            this.loading.dismiss();
            this.presentAlertPrice();
        }
        else if (this.loginData.quan.length <= 0) {
            this.loading.dismiss();
            this.presentAlertQuan();
        }
        else if (this.loginData.were.length <= 0) {
            this.loading.dismiss();
            this.presentAlertWere();
        }
        else if (this.loginData.buy.length <= 0) {
            this.loading.dismiss();
            this.presentAlertBuy();
        }
        else if (this.loginData.rap.length <= 0) {
            this.loading.dismiss();
            this.presentAlertRap();
        }
        else {
            this.url = "http://api.givet.co.uk/api/create_product.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id_2);
            postData.append('title', this.loginData.title);
            postData.append('name', this.loginData.name);
            postData.append('rating', this.rating);
            postData.append('link', this.loginData.buy);
            postData.append('price', this.loginData.price);
            postData.append('quatnity', this.loginData.quan);
            postData.append('where_buy', this.loginData.were);
            postData.append('info', this.loginData.info);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.loading.dismiss();
                if (data['max(id)'] != null) {
                    _this.new_id_prod = data['max(id)'];
                    if (_this.status == 1) {
                        _this.url = "http://api.givet.co.uk/api/add_prod_to_wish.php";
                        var postData_1 = new FormData();
                        postData_1.append('wish_id', _this.other_id);
                        postData_1.append('prod_id', _this.new_id_prod);
                        _this.new_id = data['max(id)'];
                        _this.data = _this.http.post(_this.url, postData_1);
                        _this.data.subscribe(function (data) {
                            _this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                            var postData = new FormData();
                            postData.append('img', _this.picture_new);
                            postData.append('user_id', _this.new_id);
                            postData.append('image_name', 'prod_image.jpg');
                            postData.append('type', 'fav');
                            _this.data = _this.http.post(_this.url, postData);
                            _this.data.subscribe(function (data) {
                                _this.url = "http://api.givet.co.uk/api/insert_prod_to_car.php";
                                var postData = new FormData();
                                postData.append('prod_id', _this.new_id);
                                postData.append('cat_id', _this.new_cout);
                                _this.data = _this.http.post(_this.url, postData);
                                _this.data.subscribe(function (data) {
                                    if (data['status'] == "200 OK") {
                                        _this.loading.dismiss();
                                        _this.navCtrl.pop();
                                        /*if(this.res_user==1){
                                          this.navCtrl.setRoot(WishlistViewPage,{id:this.other_id,res:this.res_user});
                                        }else{
                                          this.navCtrl.setRoot(WishlistViewPage,{id:this.other_id});
                                        }*/
                                    }
                                    else {
                                        _this.loading.dismiss();
                                        _this.presentError();
                                    }
                                });
                            });
                        });
                    }
                    else if (_this.status == 2) {
                        _this.url = "http://api.givet.co.uk/api/add_prod_to_fav.php";
                        var postData_2 = new FormData();
                        postData_2.append('fav_id', _this.other_id);
                        postData_2.append('prod_id', _this.new_id_prod);
                        _this.data = _this.http.post(_this.url, postData_2);
                        _this.new_id = _this.new_id_prod;
                        _this.data.subscribe(function (data) {
                            _this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                            var postData = new FormData();
                            postData.append('img', _this.picture_new);
                            postData.append('user_id', _this.new_id_prod);
                            postData.append('image_name', 'prod_image.jpg');
                            postData.append('type', 'fav');
                            _this.data = _this.http.post(_this.url, postData);
                            _this.data.subscribe(function (data) {
                                _this.url = "http://api.givet.co.uk/api/insert_prod_to_car.php";
                                var postData = new FormData();
                                postData.append('prod_id', _this.new_id);
                                postData.append('cat_id', _this.new_cout);
                                _this.data = _this.http.post(_this.url, postData);
                                _this.data.subscribe(function (data) {
                                    if (data['status'] == "200 OK") {
                                        _this.loading.dismiss();
                                        _this.navCtrl.pop();
                                        //this.navCtrl.setRoot(FavoriteViewPage,{id:this.other_id});
                                    }
                                    else {
                                        _this.loading.dismiss();
                                        _this.presentError();
                                    }
                                });
                            });
                        });
                        _this.loading.dismiss();
                    }
                    else {
                        _this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                        var postData_3 = new FormData();
                        postData_3.append('img', _this.picture_new);
                        postData_3.append('user_id', _this.new_id_prod);
                        postData_3.append('image_name', 'prod_image.jpg');
                        postData_3.append('type', 'fav');
                        _this.data = _this.http.post(_this.url, postData_3);
                        _this.new_id = _this.new_id_prod;
                        _this.data.subscribe(function (data) {
                            _this.url = "http://api.givet.co.uk/api/insert_prod_to_car.php";
                            var postData = new FormData();
                            postData.append('prod_id', _this.new_id);
                            postData.append('cat_id', _this.new_cout);
                            _this.data = _this.http.post(_this.url, postData);
                            _this.data.subscribe(function (data) {
                                if (data['status'] == "200 OK") {
                                    _this.loading.dismiss();
                                    _this.navCtrl.pop();
                                    //this.navCtrl.setRoot(ProductsPage,{reset:1,id:this.user_id_test});
                                }
                                else {
                                    _this.loading.dismiss();
                                    _this.presentError();
                                }
                            });
                        });
                        _this.loading.dismiss();
                    }
                }
                else {
                    _this.loading.dismiss();
                    _this.presentError();
                }
                console.log(_this.loginData);
                console.log(data);
            });
        }
    };
    ProductsCreatePage.prototype.presentAlertRap = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Product category.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentAlertWere = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Where Buy.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentAlertBuy = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Link.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentAlertPrice = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Price.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentAlertQuan = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Quantity.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentAlertTitle = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Title.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentAlertName = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Name.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage.prototype.presentAlertDesc = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please complete the Description.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ProductsCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products-create',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products-create\products-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons >\n      \n    </ion-buttons>\n    <ion-title >{{create_prod}}</ion-title>\n  \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  \n\n  <ion-list style="\n  background-color: #fff;" >   \n          \n      <div text-center style="\n        background-color: #fff;">\n           <img src = "{{base64Image}}"/>\n  </div>\n\n        <ion-item>\n            <ion-icon name="person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n             {{image_eng}}\n            </ion-label>\n            \n\n          </ion-item>          \n\n          <ion-item>\n              <button  ion-button icon-end (click)="openModal()">\n                    {{update_image_eng}}\n                  <ion-icon name="cloud-download"></ion-icon>\n                </button>\n\n               \n              </ion-item>\n\n        <ion-item>\n            <ion-icon name="ios-person" ></ion-icon>\n            <ion-label  color="primary" stacked>\n              {{link_eng}} *</ion-label>\n              <ion-input type="text" [(ngModel)]="loginData.buy" placeholder="{{link_eng}} "></ion-input>\n            \n              \n              \n          </ion-item>\n          <ion-item>\n          <button ion-button style="background-color: darkcyan;color: cornsilk" (click)="search()">{{fetch_eng}}</button>\n\n        </ion-item>\n    <ion-item>\n      <ion-icon name="ios-person" ></ion-icon>\n      <ion-label  color="primary" stacked>\n            {{title_eng}} *</ion-label>\n        <ion-input type="text" [(ngModel)]="loginData.title" placeholder="{{title_eng}} "></ion-input>\n      \n    </ion-item>\n\n    <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n            {{name_eng}} *\n          </ion-label>\n        \n          <ion-input type="text" [(ngModel)]="loginData.name" placeholder="{{name_eng}} "></ion-input>\n      \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n          {{where_buy_eng}} * </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.were" placeholder="{{where_buy_eng}} "></ion-input>\n      \n      </ion-item>\n\n\n      <ion-item>\n          <ion-icon name="ios-person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n           {{price_eng}} *</ion-label>\n            <ion-input type="text" [(ngModel)]="loginData.price" placeholder="{{price_eng}} "></ion-input>\n         \n        </ion-item>\n\n\n\n    <ion-item>\n          <ion-icon name="ios-person" ></ion-icon>\n          <ion-label  color="primary" stacked>\n            {{quantity_eng}} *</ion-label>\n            <ion-input type="number" [(ngModel)]="loginData.quan"  placeholder="{{quantity_eng}} "></ion-input>\n          \n        </ion-item>\n\n        <ion-item>\n            <ion-label  color="primary" stacked>{{prod_cat_eng}}</ion-label>\n              <ion-select     [(ngModel)]="loginData.rap" placeholder="Category *" >\n                <ion-option   [value]="8" (ionSelect)="clickOption(8)" >For Him</ion-option>\n                <ion-option   [value]="9" (ionSelect)="clickOption(9)">For Her</ion-option>\n                <ion-option   [value]="10"(ionSelect)="clickOption(10)" >For Boys</ion-option>\n                <ion-option   [value]="11" (ionSelect)="clickOption(11)">For Girls</ion-option>\n                <ion-option   [value]="12" (ionSelect)="clickOption(12)">Arts and Crafts</ion-option>\n                <ion-option   [value]="13"(ionSelect)="clickOption(13)" >Bridal Party</ion-option>\n                <ion-option   [value]="14" (ionSelect)="clickOption(14)">Collectibles</ion-option>\n              </ion-select>\n            </ion-item>\n\n    <ion-item>\n        <ion-icon name="person" ></ion-icon>\n        <ion-label   color="primary" stacked>\n          {{desc_eng}} *</ion-label>\n       \n          <ion-textarea  type="text"  [(ngModel)]="loginData.info" placeholder="Description " rows="4"></ion-textarea >\n            \n          \n      </ion-item>\n\n    \n      <ion-item>\n        <p  style="color:#488aff;">\n          {{rating_eng}} *\n        </p>\n        <ionic3-star-rating  *ngIf=" rating == \'0\' || rating ==null "\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "orange" \n        defaultColor = "grey"\n        readonly="false"\n        [rating]="0">\n    </ionic3-star-rating>\n    <ionic3-star-rating  *ngIf=" rating == \'1\'"\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "orange" \n        defaultColor = "grey"\n        readonly="false"\n        [rating]="1">\n    </ionic3-star-rating>\n    <ionic3-star-rating  *ngIf=" rating == \'2\'"\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "orange" \n        defaultColor = "grey"\n        readonly="false"\n        [rating]="2">\n    </ionic3-star-rating>\n    <ionic3-star-rating  *ngIf=" rating == \'3\'"\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "orange" \n        defaultColor = "grey"\n        readonly="false"\n        [rating]="3">\n    </ionic3-star-rating>\n    <ionic3-star-rating  *ngIf=" rating == \'4\'"\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "orange" \n        defaultColor = "grey"\n        readonly="false"\n        [rating]="4">\n    </ionic3-star-rating>\n    <ionic3-star-rating  *ngIf=" rating == \'5\'"\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "orange" \n        defaultColor = "grey"\n        readonly="false"\n        [rating]="5">\n    </ionic3-star-rating>\n    </ion-item>\n\n\n\n\n        <button ion-button full (click)="save()">{{create_new_eng}}</button>\n          \n\n\n            \n\n            <ion-item>\n\n              \n            </ion-item>\n\n  </ion-list>\n\n \n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products-create\products-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], ProductsCreatePage);
    return ProductsCreatePage;
}());

//# sourceMappingURL=products-create.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_view_events_view__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_create_events_create__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.searchBar = false;
        this.reset = navParams.get('reset');
    }
    EventsPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    EventsPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.events_lang = data['event'];
                _this.create_new_lang = data['create_new'];
            });
            _this.url = "http://api.givet.co.uk/api/my_events.php?user_id=" + _this.user_id;
            _this.getData();
        });
    };
    EventsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    EventsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.loadDB();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EventsPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_event.php?event_name=" + this.queryText + "&user_id=" + this.user_id;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    EventsPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.loadDB();
    };
    EventsPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
        });
        this.loading.dismiss();
    };
    EventsPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__events_view_events_view__["a" /* EventsViewPage */], {
            id: item['id']
        });
    };
    EventsPage.prototype.moToCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__events_create_events_create__["a" /* EventsCreatePage */]);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events\events.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!searchBar">{{events_lang}}</ion-title>\n     \n     \n      <ion-buttons *ngIf="!searchBar" end style="margin-right: 3px;">\n          <button ion-button icon-only (click)="moToCreate()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n\n\n        <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n        (ionInput)="updateText($event)"></ion-searchbar>\n        <ion-buttons end>\n          <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        </ion-buttons>\n\n\n        \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  \n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n            pullingText="Pull to refresh..."\n            refreshingText="Refreshing...">\n          </ion-refresher-content>\n        </ion-refresher>\n        \n    <ion-list>\n  \n      <ion-list *ngIf="items == null" text-center>\n\n    \n        <button *ngIf="items == null" (click)="moToCreate()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new_lang}}</button>\n      </ion-list>\n\n     \n       \n    \n\n        <ion-col *ngFor="let item of items"  no-padding>\n  \n            <ion-card (click)="moToView(item)">\n\n                <ion-item>\n                  <h2>{{item.name}}</h2>\n                  \n                  <span *ngIf="item.repeat == \'0\'" class="label label-info">Weekly</span>\n                  <span *ngIf="item.repeat == \'1\'" class="label label-info">Monthly</span> \n                  <span *ngIf="item.repeat == \'2\'" class="label label-info">Yearly</span>\n                  <span *ngIf="item.repeat == \'3\'" class="label label-info">One Time</span>\n                </ion-item>\n              \n               \n              \n                <ion-card-content>\n                    <p [innerHtml]="(item.description | slice:0:150) + (item.description.length > 150 ? \'...\' : \'\') "></p>\n              \n                </ion-card-content>\n              \n                <ion-row>\n                  <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="ios-time-outline"></ion-icon>\n                      <div>{{item.time}}</div>\n                    </button>\n                  </ion-col>\n\n                  <ion-col>\n                      <button ion-button icon-start clear small>\n                        <ion-icon name="md-calendar"></ion-icon>\n                        <div>{{item.date}}</div>\n                      </button>\n                    </ion-col>\n\n\n                  \n                </ion-row>\n              \n              </ion-card>\n  \n        </ion-col>\n      \n    </ion-list>\n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\events\events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, sqlitePorter, storage, sqlite, platform) {
        var _this = this;
        this.http = http;
        this.sqlitePorter = sqlitePorter;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](false);
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'developers.db',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.storage.get('database_filled').then(function (val) {
                    if (val) {
                        _this.databaseReady.next(true);
                    }
                    else {
                        _this.fillDatabase();
                    }
                });
            });
        });
    }
    DatabaseProvider.prototype.fillDatabase = function () {
        var _this = this;
        this.http.get('assets/dumy.sql')
            .map(function (res) { return res.text(); })
            .subscribe(function (sql) {
            _this.sqlitePorter.importSqlToDb(_this.database, sql)
                .then(function (data) {
                _this.databaseReady.next(true);
                _this.storage.set('database_filled', true);
            })
                .catch(function (e) { return console.error(e); });
        });
    };
    DatabaseProvider.prototype.addDeveloper = function (fp_id, user_id) {
        var data = [fp_id, user_id];
        return this.database.executeSql("INSERT INTO user (fp_id,user_id) VALUES (?,?)", data).then(function (res) {
            return res;
        });
    };
    DatabaseProvider.prototype.addDeveloperSoc = function (fp_id, user_id, auth_token_tw, oauth_token_secret_tw, user_id_soc_tw) {
        var data = [fp_id, user_id, auth_token_tw, oauth_token_secret_tw, user_id_soc_tw];
        return this.database.executeSql("INSERT INTO user (fp_id,user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw) VALUES (?,?,?,?,?)", data).then(function (res) {
            return res;
        });
    };
    DatabaseProvider.prototype.deleteDrop = function () {
        return this.database.executeSql("DELETE FROM user", []).then(function (res) {
            return res;
        });
    };
    DatabaseProvider.prototype.getUsers = function () {
        return this.database.executeSql("SELECT * FROM user", []).then(function (data) {
            var dev = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    dev.push({ fp_id: data.rows.item(i).fp_id, user_id: data.rows.item(i).user_id });
                }
            }
            return dev;
        }, function (err) {
            console.log("Erro", err);
            return [];
        });
    };
    DatabaseProvider.prototype.getUsersTW = function () {
        return this.database.executeSql("SELECT * FROM user", []).then(function (data) {
            var dev = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    dev.push({ fp_id: data.rows.item(i).fp_id, user_id: data.rows.item(i).user_id, auth_token_tw: data.rows.item(i).auth_token_tw, oauth_token_secret_tw: data.rows.item(i).oauth_token_secret_tw,
                        user_id_soc_tw: data.rows.item(i).user_id_soc_tw });
                }
            }
            return dev;
        }, function (err) {
            console.log("Erro", err);
            return [];
        });
    };
    DatabaseProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__["a" /* SQLitePorter */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* Platform */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlist_update_wishlist_update__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_view_products_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_create_products_create__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_product_select_product__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wish_list_wish_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_wishlist_user_wishlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__events_view_events_view__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the WishlistViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistViewPage = /** @class */ (function () {
    function WishlistViewPage(navCtrl, navParams, modalCtrl, http, alertCtrl, loadingCtrl, databaseProvider, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.socialSharing = socialSharing;
        this.dev = [];
        this.devs = {};
        this.items_dota = [];
        this.loginData = { title: '' };
        this.result = [];
        this.ids = navParams.get('id');
        this.res_user = navParams.get('res');
        this.ides = navParams.get('ides');
        this.id_wish = navParams.get('id_wish');
    }
    WishlistViewPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    WishlistViewPage.prototype.backTo = function () {
        if (this.res_user == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__user_wishlist_user_wishlist__["a" /* UserWishlistPage */], {
                id: this.ides
            });
        }
        else if (this.res_user == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__events_view_events_view__["a" /* EventsViewPage */], {
                id: this.id_wish
            });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wish_list_wish_list__["a" /* WishListPage */]);
        }
    };
    WishlistViewPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.private_lang = data['private'];
                _this.desc_lang = data['description'];
                _this.product_lang = data['product'];
                _this.delete_lang = data['del'];
            });
            _this.url = "http://api.givet.co.uk/api/info_wishlist.php?wishlist_id=" + _this.ids;
            _this.getData();
        });
    };
    WishlistViewPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__products_view_products_view__["a" /* ProductsViewPage */], {
            id: item['id']
        });
    };
    WishlistViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    WishlistViewPage.prototype.dislike = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/set_like_wish.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id_2);
        postData.append('prod_id', this.ids);
        postData.append('like', '0');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id=" + _this.user_id_2 + "&wish_id=" + _this.ids;
                _this.data_like = _this.http.get(_this.url_like);
                _this.data_like.subscribe(function (data_like) {
                    _this.status = data_like['status'];
                });
                _this.loading.dismiss();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    WishlistViewPage.prototype.share = function () {
        // Check if sharing via email is supported
        this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/wishlist_page&select=wishlist&id=" + this.ids).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    WishlistViewPage.prototype.like = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/set_like_wish.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id_2);
        postData.append('prod_id', this.ids);
        postData.append('like', '1');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id=" + _this.user_id_2 + "&wish_id=" + _this.ids;
                _this.data_like = _this.http.get(_this.url_like);
                _this.data_like.subscribe(function (data_like) {
                    _this.status = data_like['status'];
                });
                _this.loading.dismiss();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    WishlistViewPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    WishlistViewPage.prototype.openModalFriend = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Selection',
            message: 'Choose an option?',
            buttons: [
                {
                    text: 'Choose from created',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__select_product_select_product__["a" /* SelectProductPage */], {
                            status: 1,
                            wish_id: _this.ids,
                            res: _this.res_user
                        });
                    }
                },
                {
                    text: 'Create new',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__products_create_products_create__["a" /* ProductsCreatePage */], {
                            status: 1,
                            wish_id: _this.ids,
                            res: _this.res_user
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    WishlistViewPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.loginData.title = data['title'];
            _this.title = data['title'];
            _this.description = data['description'];
            _this.image = data['image'];
            _this.private = data['private'];
            _this.type = data['type'];
            _this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id;
            _this.data_user = _this.http.get(_this.url_user);
            _this.data_user.subscribe(function (data_user) {
                _this.user_name = data_user['name'];
                _this.user_email = data_user['email'];
                _this.user_surename = data_user['surename'];
                _this.user_image = data_user['image'];
                var person = "http";
                var personRegExp = new RegExp(person);
                if (personRegExp.test(_this.user_image)) {
                    console.log(person + " is a philosopher.");
                    _this.test = '1';
                }
                else {
                    console.log(person + " is NOT a philosopher.");
                }
                _this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id=" + _this.user_id_2 + "&wish_id=" + _this.ids;
                _this.data_like = _this.http.get(_this.url_like);
                _this.data_like.subscribe(function (data_like) {
                    _this.status = data_like['status'];
                });
                _this.url228 = "http://api.givet.co.uk/api/get_products_from_wish.php?wish_id=" + _this.ids;
                _this.data_products = _this.http.get(_this.url228);
                _this.data_products.subscribe(function (data_new) {
                    _this.items_dota = data_new;
                    _this.loading.dismiss();
                });
            });
        });
        // this.loading.dismiss();
    };
    WishlistViewPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure you want to delete product from wishlist ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.presentLoadingDefault();
                        var url = "http://api.givet.co.uk/api/delete_wishlist.php";
                        var postData = new FormData();
                        postData.append('wishlist_id', id);
                        _this.data = _this.http.post(url, postData);
                        _this.data.subscribe(function (data) {
                            if (data['wishlist']['status'] == "OK") {
                                _this.loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wish_list_wish_list__["a" /* WishListPage */], { reset: 1 });
                            }
                            else {
                                _this.loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wish_list_wish_list__["a" /* WishListPage */], { reset: 1 });
                            }
                            console.log(data);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    WishlistViewPage.prototype.del = function (item) {
        var _this = this;
        //  this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/delete_prod_from_wish.php";
        var postData = new FormData();
        postData.append('wish_id', this.ids);
        postData.append('prod_id', item.id);
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            //this.presentLoadingDefault();
            _this.loadDB();
        });
    };
    WishlistViewPage.prototype.moveToLogin = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wishlist_update_wishlist_update__["a" /* WishlistUpdatePage */], {
            id: id
        });
    };
    WishlistViewPage.prototype.openModal = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: id
        });
    };
    WishlistViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wishlist-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wishlist-view\wishlist-view.html"*/'<!--\n  Generated template for the WishlistViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title >{{ (loginData.title | slice:0:15) + (loginData.title.length > 15 ? \'...\' : \'\')}}</ion-title>\n\n    <ion-buttons *ngIf=" user_id == user_id_2" end>\n        <button ion-button icon-only (click)="moveToLogin(ids)">\n          <ion-icon name="ios-create-outline"></ion-icon>\n        </button>\n\n        <button ion-button icon-only (click)="presentConfirm(ids)">\n            <ion-icon name="trash" ></ion-icon>\n\n            \n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n    <ion-card>\n\n        <ion-item>\n         \n          <h2 [innerHtml]="title"></h2>\n          <span *ngIf=" type == \'0\'" class="label label-danger">                  \n            Private</span> \n            <span *ngIf=" type == \'1\'" class="label label-warning">                  \n                Shared</span> \n                <span *ngIf=" type == \'2\'" class="label label-success">                  \n                    Public</span>  \n        </ion-item>\n      \n\n        <img *ngIf="image != null" src="https://givet.co.uk/backend/web/images/{{image}}"/>\n        <img *ngIf="image == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n      \n      <ion-card-content><b>{{private_lang}}:</b> </ion-card-content>\n      <ion-card-content [innerHtml]="private"> </ion-card-content>\n\n        <ion-card-content><b>{{desc_lang}}:</b> </ion-card-content>\n\n        <ion-card-content>\n          <p [innerHtml]="description"></p>\n        </ion-card-content>\n      \n        <ion-item (click)="openModal(user_id)" *ngIf="user_email != \'admin@admin.com\'">\n            <ion-avatar item-start>\n                <img class="goga" *ngIf=" test != null" src="{{user_image}}">\n                <img class="goga" *ngIf=" test == null && user_image != null" src="https://givet.co.uk/backend/web/images/users/{{user_image}}">\n                <img *ngIf="user_image == null && test == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n            </ion-avatar>\n            <h2>{{user_name}} {{user_surename}}</h2>\n            <p>{{user_email}}</p>\n          </ion-item>\n\n\n      \n\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small (click)="like()">\n              <ion-icon *ngIf=" status ==\'1\'" name="thumbs-up" color="secondary"></ion-icon>\n              <ion-icon *ngIf=" status !=\'1\'" name="thumbs-up" ></ion-icon>\n              <div>Like</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small (click)="dislike()">\n                <ion-icon *ngIf=" status !=\'0\'" name="thumbs-down"  ></ion-icon>\n              <ion-icon *ngIf=" status ==\'0\'" name="thumbs-down"  color="danger"></ion-icon>\n              <div>Dislike</div>\n            </button>\n          </ion-col>\n         \n        </ion-row>\n\n        <ion-item *ngIf=" type == \'0\'">\n            <button ion-button (click)="share()">Share</button>\n        </ion-item>\n      \n      </ion-card>\n\n      <ion-list>\n\n      <ion-card>\n\n        \n                <div class="item" *ngIf="type != \'0\' || user_id==user_id_2 ">\n                 \n                    <h2  style="padding: 20px;" float-left>\n                        {{product_lang}} </h2>\n\n                       \n                   \n                       \n\n                      \n              <ion-buttons  style="padding: 10px;" *ngIf=" type == \'2\' && user_id == user_id_2 || user_id == user_id_2" float-right (click)="openModalFriend()">\n                  <button ion-button icon-only >\n                    <ion-icon name="add"></ion-icon>\n                  </button>\n                  \n                </ion-buttons>\n                  </div>\n    \n         \n                </ion-card>\n     \n                <ion-card >\n              \n                <ion-col *ngFor="let item of items_dota"  no-padding>\n\n                  \n\n                        <ion-item>\n                            <ion-avatar item-start>\n                              <img src="https://givet.co.uk/backend/web/images/{{item.image}}">\n                            </ion-avatar>\n\n                            <h2 (click)="moToView(item)"> {{item.name}}</h2>\n                           \n                          </ion-item>\n                        \n                      \n          \n                        <ion-card-header *ngIf=" item.rating == \'0\'" class="no-mg">\n          \n          \n          \n                                <ion-icon  name="star" class=" unchecked 1"></ion-icon>\n                                \n                                <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                                <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                                <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                                <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n            \n                                \n                                \n                              </ion-card-header>\n          \n          \n                        <ion-card-header *ngIf=" item.rating == \'1\'" class="no-mg">\n          \n          \n          \n                            <ion-icon  name="star" class=" checked 1"></ion-icon>\n                            \n                            <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                            <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                            <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                            <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n          \n                            \n                            \n                          </ion-card-header>\n          \n                          <ion-card-header *ngIf=" item.rating == \'2\'" class="no-mg">\n          \n          \n          \n                                <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                \n                                <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                                <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                                <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n            \n                                \n                                \n                              </ion-card-header>\n          \n                              <ion-card-header *ngIf=" item.rating == \'3\'" class="no-mg">\n          \n          \n          \n                                    <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                    \n                                    <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                    <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                    <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                                    <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n                \n                                    \n                                    \n                                  </ion-card-header>\n          \n                                  <ion-card-header *ngIf=" item.rating == \'4\'" class="no-mg">\n          \n          \n          \n                                        <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                        \n                                        <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                        <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                        <ion-icon  name="star" class=" checked 4"></ion-icon>\n                                        <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n                    \n                                        \n                                        \n                                      </ion-card-header>\n          \n                                      <ion-card-header *ngIf=" item.rating == \'5\'" class="no-mg">\n          \n          \n          \n                                            <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                            \n                                            <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                            <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                            <ion-icon  name="star" class=" checked 4"></ion-icon>\n                                            <ion-icon  name="star" class=" checked 5"></ion-icon>\n                        \n                                            \n                                            \n                                          </ion-card-header>\n          \n                          <ion-card-header class="no-mg" (click)="moToView(item)">\n                              <span class="label label-success">                  \n                                  <ion-icon name="md-cash"></ion-icon> {{item.price}}</span> \n                              \n                                  <span class="label label-warning">                  \n                                      <ion-icon name="ios-grid-outline"></ion-icon> {{item.quan}}</span> \n                            </ion-card-header>\n                        \n                      \n                           \n\n                        <ion-card-content (click)="moToView(item)" class="fixline" [innerHtml]="(item.details | slice:0:150) + (item.details.length > 150 ? \'...\' : \'\') ">\n                         \n                        </ion-card-content>\n                      \n\n\n                        <ion-card-header class="bot-pd" style="margin-bottom: 7px" *ngIf=" type == \'2\' && user_id == user_id_2 || user_id == user_id_2">\n                          <button ion-button color="danger" (click)="del(item)">{{delete_lang}}</button>\n                           \n                         </ion-card-header>\n                        \n\n                      \n          \n                </ion-col>\n\n              </ion-card>\n              \n\n              </ion-list>\n\n        \n\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\wishlist-view\wishlist-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], WishlistViewPage);
    return WishlistViewPage;
}());

//# sourceMappingURL=wishlist-view.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { WishlistCreatePage } from '../pages/wishlist-create/wishlist-create';
//import { GroupsViewPage } from '../pages/groups-view/groups-view';
//import { WishListPage } from '../pages/wish-list/wish-list';
//import { TabsPage } from '../pages/tabs/tabs';
//import { ProductsPage } from '../pages/products/products';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserWishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlist_view_wishlist_view__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserWishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserWishlistPage = /** @class */ (function () {
    function UserWishlistPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.devs = [];
        this.dev = {};
        this.ides = navParams.get('id');
        this.loadDB();
    }
    UserWishlistPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    UserWishlistPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.url = "http://api.givet.co.uk/api/my_wishlist.php?user_id=" + this.ides;
        this.getData();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    UserWishlistPage.prototype.backTo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: this.ides
        });
    };
    UserWishlistPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //      alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.fav_eng = data['wishlist'];
                _this.products_eng = data['product'];
            });
            _this.url = "http://api.givet.co.uk/api/my_wishlist.php?user_id=" + _this.ides;
            _this.getData();
        });
    };
    UserWishlistPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_wishlist.php?wishlist_name=" + this.queryText + "&user_id=" + this.ides;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    UserWishlistPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/my_wishlist.php?user_id=" + this.ides;
        this.getData();
    };
    UserWishlistPage.prototype.getData = function () {
        var _this = this;
        // this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
        });
        //   this.loading.dismiss();
    };
    UserWishlistPage.prototype.moveToWish = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wishlist_view_wishlist_view__["a" /* WishlistViewPage */], {
            id: items['id'],
            ides: this.ides,
            res: 1
        });
    };
    UserWishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-wishlist',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-wishlist\user-wishlist.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title *ngIf="!searchBar">{{fav_eng}}</ion-title>\n\n   \n    <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n    (ionInput)="updateText($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n      <ion-icon name="search"></ion-icon>\n    </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingText="Pull to refresh..."\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n\n\n  <ion-list>\n\n    \n      <ion-col *ngFor="let item of items"  no-padding>\n\n          <ion-card (click)="moveToWish(item)" *ngIf=" item.type != \'0\'">\n             \n              <img *ngIf="item.image != null && item.image.length > 0" src="https://givet.co.uk/backend/web/images/{{item.image}}"/>\n                  <img *ngIf="item.image == null || item.image.length <= 0" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n              <ion-card-header class="bot-pd">\n               {{item.title}}\n                \n              </ion-card-header>\n\n\n              <ion-card-header class="no-mg">\n        \n                      <span *ngIf=" item.type == \'1\'" class="label label-warning">                  \n                          Shared</span> \n                          <span *ngIf=" item.type == \'2\'" class="label label-success">                  \n                              Public</span> \n                  \n                </ion-card-header>\n              \n            \n                <ion-card-content [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') ">\n              \n              </ion-card-content>\n\n\n              \n              <ion-row>\n                 \n                <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="briefcase"></ion-icon>\n                      <div >{{products_eng}}: {{item.count}}</div>\n                \n                    </button>\n                  </ion-col>\n\n                  <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="md-calendar"></ion-icon>\n                      <div>{{item.date_add}}</div>\n                    </button>\n                  </ion-col>\n                \n              </ion-row>\n            \n            </ion-card>\n\n      </ion-col>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-wishlist\user-wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], UserWishlistPage);
    return UserWishlistPage;
}());

//# sourceMappingURL=user-wishlist.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorite_view_favorite_view__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserFavlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserFavlistPage = /** @class */ (function () {
    function UserFavlistPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.devs = [];
        this.dev = {};
        this.ides = navParams.get('id');
        this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id=" + this.ides;
        this.getData();
    }
    UserFavlistPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    UserFavlistPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //      alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.fav_eng = data['fav'];
                _this.products_eng = data['product'];
            });
        });
    };
    UserFavlistPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
            _this.loadDB();
        });
        this.loading.dismiss();
    };
    UserFavlistPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_fav.php?fav_name=" + this.queryText + "&user_id=" + this.ides;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    UserFavlistPage.prototype.backTo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: this.ides
        });
    };
    UserFavlistPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id=" + this.ides;
        this.getData();
    };
    UserFavlistPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id=" + this.ides;
        this.getData();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    UserFavlistPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__favorite_view_favorite_view__["a" /* FavoriteViewPage */], {
            id: item['id'],
            ides: this.ides,
            res: 1
        });
    };
    UserFavlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-favlist',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-favlist\user-favlist.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      \n    <ion-title *ngIf="!searchBar">{{fav_eng}}</ion-title>\n\n    <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n        (ionInput)="updateText($event)"></ion-searchbar>\n        <ion-buttons end>\n          <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingText="Pull to refresh..."\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n\n\n    \n      <ion-col *ngFor="let item of items"  no-padding>\n\n          <ion-card (click)="moToView(item)">\n              \n              <ion-card-header class="bot-pd">\n               {{item.name}}\n                \n              </ion-card-header>\n\n         \n              \n            \n                  <ion-card-content  [innerHtml]="(item.info | slice:0:150) +(item.info.length > 150 ? \'...\' : \'\') ">\n              \n              </ion-card-content>\n\n              <ion-row>\n                 \n                <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="briefcase"></ion-icon>\n                      <div  >{{products_eng}}: {{item.count}}</div>\n                   \n                    </button>\n                  </ion-col>\n\n                  <ion-col>\n                    <button ion-button icon-start clear small>\n                      <ion-icon name="md-calendar"></ion-icon>\n                      <div>{{item.date_add}}</div>\n                    </button>\n                  </ion-col>\n               \n                \n              </ion-row>\n            \n            </ion-card>\n\n      </ion-col>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\user-favlist\user-favlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], UserFavlistPage);
    return UserFavlistPage;
}());

//# sourceMappingURL=user-favlist.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_update_favorite_update__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_view_products_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_create_products_create__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_product_select_product__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_lists_my_lists__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_favlist_user_favlist__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the FavoriteViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoriteViewPage = /** @class */ (function () {
    function FavoriteViewPage(navCtrl, navParams, modalCtrl, http, alertCtrl, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.loginData = { title: '' };
        this.items_dota = [];
        this.dev = [];
        this.devs = {};
        this.result = [];
        this.ids = navParams.get('id');
        this.res_user = navParams.get('res');
        this.ides = navParams.get('ides');
    }
    FavoriteViewPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    FavoriteViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FavoriteViewPage.prototype.del = function (item) {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/delete_prod_from_fav.php";
        var postData = new FormData();
        postData.append('fav_id', this.ids);
        postData.append('prod_id', item.id);
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            _this.loading.dismiss();
            _this.loadDB();
        });
    };
    FavoriteViewPage.prototype.backTo = function () {
        if (this.res_user == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__user_favlist_user_favlist__["a" /* UserFavlistPage */], {
                id: this.ides
            });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__my_lists_my_lists__["a" /* MyListsPage */]);
        }
    };
    FavoriteViewPage.prototype.openModalFriend = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Selection',
            message: 'Choose an option?',
            buttons: [
                {
                    text: 'Choose from created',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__select_product_select_product__["a" /* SelectProductPage */], {
                            status: 2,
                            fav_id: _this.ids
                        });
                    }
                },
                {
                    text: 'Create new',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__products_create_products_create__["a" /* ProductsCreatePage */], {
                            status: 2,
                            fav_id: _this.ids
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    FavoriteViewPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__products_view_products_view__["a" /* ProductsViewPage */], {
            id: item['id']
        });
    };
    FavoriteViewPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.lang = data['product'];
                _this.delete_lang = data['del'];
            });
            _this.url = "http://api.givet.co.uk/api/info_fav.php?fav_id=" + _this.ids;
            _this.getData();
        });
    };
    FavoriteViewPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.name = data['name'];
            _this.loginData.title = data['name'];
            _this.type = data['type'];
            _this.info = data['info'];
            _this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id=" + _this.user_id;
            _this.data_user = _this.http.get(_this.url_user);
            _this.data_user.subscribe(function (data_user) {
                _this.user_name = data_user['name'];
                _this.user_email = data_user['email'];
                _this.user_surename = data_user['surename'];
                _this.user_image = data_user['image'];
                var person = "http";
                var personRegExp = new RegExp(person);
                if (personRegExp.test(_this.user_image)) {
                    console.log(person + " is a philosopher.");
                    _this.test = '1';
                }
                else {
                    console.log(person + " is NOT a philosopher.");
                }
                _this.url_like = " http://api.givet.co.uk/api/get_fav_like.php?user_id=" + _this.user_id_2 + "&fav_id=" + _this.ids;
                _this.data_like = _this.http.get(_this.url_like);
                _this.data_like.subscribe(function (data_like) {
                    _this.status = data_like['status'];
                    _this.url228 = "http://api.givet.co.uk/api/get_products_from_fav.php?fav_id=" + _this.ids;
                    _this.data_products = _this.http.get(_this.url228);
                    _this.data_products.subscribe(function (data_new) {
                        _this.items_dota = data_new;
                        _this.loading.dismiss();
                    });
                    //this.loading.dismiss();
                });
            });
        });
        //    this.loading.dismiss();
    };
    FavoriteViewPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure you want to delete product from list ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.presentLoadingDefault();
                        var url = "http://api.givet.co.uk/api/delete_fav.php";
                        var postData = new FormData();
                        postData.append('fav_id', id);
                        _this.data = _this.http.post(url, postData);
                        _this.data.subscribe(function (data) {
                            if (data['favorite']['status'] == "OK") {
                                _this.loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__my_lists_my_lists__["a" /* MyListsPage */], { reset: 1 });
                            }
                            else {
                                _this.loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__my_lists_my_lists__["a" /* MyListsPage */], { reset: 1 });
                            }
                            console.log(data);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    FavoriteViewPage.prototype.dislike = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/set_like_fav.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id_2);
        postData.append('prod_id', this.ids);
        postData.append('like', '0');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    FavoriteViewPage.prototype.like = function () {
        var _this = this;
        this.presentLoadingDefault();
        var url = "http://api.givet.co.uk/api/set_like_fav.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id_2);
        postData.append('prod_id', this.ids);
        postData.append('like', '1');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['user']['status'] == "200 OK") {
                _this.loading.dismiss();
                _this.loadDB();
            }
            else {
                _this.loading.dismiss();
                _this.presentError();
            }
            console.log(data);
        });
        this.loading.dismiss();
    };
    FavoriteViewPage.prototype.moToCreate = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__favorite_update_favorite_update__["a" /* FavoriteUpdatePage */], {
            id: id
        });
    };
    FavoriteViewPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error establishing connection to server',
            buttons: ['Ok']
        });
        alert.present();
    };
    FavoriteViewPage.prototype.openModal = function (user_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile__["a" /* UserProfilePage */], {
            ides: user_id
        });
    };
    FavoriteViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favorite-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\favorite-view\favorite-view.html"*/'<!--\n  Generated template for the WishlistViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      \n      <ion-title>{{ (loginData.title | slice:0:15) + (loginData.title.length > 15 ? \'...\' : \'\')}}</ion-title>\n  \n      <ion-buttons *ngIf=" user_id == user_id_2" end>\n          <button ion-button icon-only (click)="moToCreate(ids)">\n            <ion-icon name="ios-create-outline"></ion-icon>\n          </button>\n  \n          <button ion-button icon-only (click)="presentConfirm(ids)">\n              <ion-icon name="trash" ></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n\n  <ion-content >\n  \n  \n      <ion-card>\n  \n          <ion-item>\n           \n            <h2>{{name}}</h2>\n\n          </ion-item>\n                   \n          <ion-card-content [innerHtml]="info">\n          \n          </ion-card-content>\n\n          \n        \n          <ion-item (click)="openModal(user_id)">\n            <ion-avatar item-start>\n                <img class="goga" *ngIf=" test != null" src="{{user_image}}">\n                <img class="goga" *ngIf=" test == null && user_image != null" src="https://givet.co.uk/backend/web/images/users/{{user_image}}">\n                <img *ngIf="user_image == null && test == null" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n            </ion-avatar>\n            <h2>{{user_name}} {{user_surename}}</h2>\n            <p>{{user_email}}</p>\n          </ion-item>\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-start clear small (click)="like()">\n                  <ion-icon *ngIf=" status ==\'1\'" name="thumbs-up" color="secondary"></ion-icon>\n                  <ion-icon *ngIf=" status !=\'1\'" name="thumbs-up" ></ion-icon>\n                <div>Like</div>\n              </button>\n            </ion-col>\n            <ion-col>\n\n              <button ion-button icon-start clear small (click)="dislike()">\n                  <ion-icon *ngIf=" status !=\'0\'" name="thumbs-down"  ></ion-icon>\n                  <ion-icon *ngIf=" status ==\'0\'" name="thumbs-down"  color="danger"></ion-icon>\n                <div>Dislike</div>\n              </button>\n            </ion-col>\n           \n          </ion-row>\n          \n      \n        \n        </ion-card>\n\n      \n        <ion-card>\n\n              <div class="item" *ngIf="user_id==user_id_2 ">\n              \n                  <h2  style="padding: 20px;" float-left>{{lang}} </h2>\n              \n              \n\n                    \n            <ion-buttons   style="padding: 10px;" *ngIf=" user_id == user_id_2" float-right (click)="openModalFriend()">\n                <button ion-button icon-only >\n                  <ion-icon name="add"></ion-icon>\n                </button>\n                \n              </ion-buttons>\n                </div>\n  \n        </ion-card>\n\n              <ion-list>\n\n                \n                  <ion-col *ngFor="let item of items_dota"  no-padding>\n\n                      <ion-card >\n                          \n                          <ion-item>\n                              <ion-avatar item-start>\n                                <img src="https://givet.co.uk/backend/web/images/{{item.image}}">\n                              </ion-avatar>\n  \n                              <h2 (click)="moToView(item)"> {{item.name}}</h2>\n                             \n                            </ion-item>\n            \n                          <ion-card-header *ngIf=" item.rating == \'0\'" class="no-mg">\n            \n            \n            \n                                  <ion-icon  name="star" class=" unchecked 1"></ion-icon>\n                                  \n                                  <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                                  <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                                  <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                                  <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n              \n                                  \n                                  \n                                </ion-card-header>\n            \n            \n                          <ion-card-header *ngIf=" item.rating == \'1\'" class="no-mg">\n            \n            \n            \n                              <ion-icon  name="star" class=" checked 1"></ion-icon>\n                              \n                              <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                              <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                              <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                              <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n            \n                              \n                              \n                            </ion-card-header>\n            \n                            <ion-card-header *ngIf=" item.rating == \'2\'" class="no-mg">\n            \n            \n            \n                                  <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                  \n                                  <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                  <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                                  <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                                  <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n              \n                                  \n                                  \n                                </ion-card-header>\n            \n                                <ion-card-header *ngIf=" item.rating == \'3\'" class="no-mg">\n            \n            \n            \n                                      <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                      \n                                      <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                      <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                      <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                                      <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n                  \n                                      \n                                      \n                                    </ion-card-header>\n            \n                                    <ion-card-header *ngIf=" item.rating == \'4\'" class="no-mg">\n            \n            \n            \n                                          <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                          \n                                          <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                          <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                          <ion-icon  name="star" class=" checked 4"></ion-icon>\n                                          <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n                      \n                                          \n                                          \n                                        </ion-card-header>\n            \n                                        <ion-card-header *ngIf=" item.rating == \'5\'" class="no-mg">\n            \n            \n            \n                                              <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                              \n                                              <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                              <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                              <ion-icon  name="star" class=" checked 4"></ion-icon>\n                                              <ion-icon  name="star" class=" checked 5"></ion-icon>\n                          \n                                              \n                                              \n                                            </ion-card-header>\n            \n                            <ion-card-header class="no-mg" (click)="moToView(item)">\n                                <span class="label label-success">                  \n                                    <ion-icon name="md-cash"></ion-icon> {{item.price}}</span> \n                                \n                                    <span class="label label-warning">                  \n                                        <ion-icon name="ios-grid-outline"></ion-icon> {{item.quan}}</span> \n                              </ion-card-header>\n                          \n                            \n\n                              <ion-card-content (click)="moToView(item)" class="fixline" [innerHtml]="(item.details | slice:0:150) + (item.details.length > 150 ? \'...\' : \'\')">\n                            \n                           \n                          </ion-card-content>\n\n                          \n                        <ion-card-header class="bot-pd" style="margin-bottom: 7px" *ngIf=" user_id == user_id_2">\n                          <button ion-button color="danger" (click)="del(item)">{{delete_lang}}</button>\n                           \n                         </ion-card-header>\n                        \n                        </ion-card>\n            \n                  </ion-col>\n                \n\n                </ion-list>\n\n          \n\n\n         \n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\favorite-view\favorite-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], FavoriteViewPage);
    return FavoriteViewPage;
}());

//# sourceMappingURL=favorite-view.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyListsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorite_view_favorite_view__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorite_create_favorite_create__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyListsPage = /** @class */ (function () {
    function MyListsPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.items_count = [];
        this.searchBar = false;
        this.reset = navParams.get('reset');
    }
    MyListsPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    MyListsPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.products_lang = data['product'];
                _this.create_new_lang = data['create_new'];
            });
            _this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id=" + _this.user_id_2;
            _this.getData();
        });
    };
    MyListsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MyListsPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_fav.php?fav_name=" + this.queryText + "&user_id=" + this.user_id_2;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    MyListsPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.loadDB();
    };
    MyListsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.loadDB();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    MyListsPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
            _this.loading.dismiss();
        });
        this.loading.dismiss();
    };
    MyListsPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__favorite_view_favorite_view__["a" /* FavoriteViewPage */], {
            id: item['id']
        });
    };
    MyListsPage.prototype.moToCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__favorite_create_favorite_create__["a" /* FavoriteCreatePage */]);
    };
    MyListsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-lists',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\my-lists\my-lists.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!searchBar">Favorite List</ion-title>\n  \n    \n      <ion-buttons *ngIf="!searchBar" end style="margin-right: 3px;">\n          <button ion-button icon-only (click)="moToCreate()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n        (ionInput)="updateText($event)"></ion-searchbar>\n        <ion-buttons end>\n          <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        </ion-buttons>\n\n\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    \n  \n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n            pullingText="Pull to refresh..."\n            refreshingText="Refreshing...">\n          </ion-refresher-content>\n        </ion-refresher>\n        \n    <ion-list>\n  \n      \n       \n    \n          <ion-list *ngIf="items == null " text-center>\n    \n        \n              <button *ngIf="items == null" (click)="moToCreate()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new_lang}}</button>\n            </ion-list>\n       \n        \n        <ion-col *ngFor="let item of items"  no-padding>\n  \n            <ion-card (click)="moToView(item)">\n                \n                <ion-card-header class="bot-pd">\n                 {{item.name}}\n                  \n                </ion-card-header>\n                \n              \n                <ion-card-content  [innerHtml]="(item.info | slice:0:150) +(item.info.length > 150 ? \'...\' : \'\') ">\n                \n                </ion-card-content>\n\n                <ion-row>\n                 \n                  <ion-col>\n                      <button ion-button icon-start clear small>\n                        <ion-icon name="briefcase"></ion-icon>\n                        <div >{{products_lang}}: {{item.count}}</div>\n                     \n                      </button>\n                    </ion-col>\n\n                    <ion-col>\n                      <button ion-button icon-start clear small>\n                        <ion-icon name="md-calendar"></ion-icon>\n                        <div>{{item.date_add}}</div>\n                      </button>\n                    </ion-col>\n                 \n                  \n                </ion-row>\n              \n              </ion-card>\n  \n        </ion-col>\n      \n    </ion-list>\n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\my-lists\my-lists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyListsPage);
    return MyListsPage;
}());

//# sourceMappingURL=my-lists.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SocialFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialFriendsPage = /** @class */ (function () {
    function SocialFriendsPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.devs = [];
        this.dev = {};
    }
    SocialFriendsPage.prototype.ionViewDidEnter = function () {
        this.url = "http://jsonplaceholder.typicode.com/posts";
        this.loadDB();
    };
    SocialFriendsPage.prototype.next = function () {
        this.slides.slideNext();
    };
    SocialFriendsPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    SocialFriendsPage.prototype.loadDB = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //      alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            var url2 = "http://api.givet.co.uk/api/get_twitter_friends.php";
            //this.presentLoadingDefault();
            var postData = new FormData();
            postData.append('user_id', _this.user_id_2);
            _this.data2 = _this.http.post(url2, postData);
            _this.data2.subscribe(function (data2) {
                _this.items2 = data2['users'];
                _this.loading.dismiss();
                // alert(JSON.stringify(data2['users']));
                _this.getData();
            });
            _this.loading.dismiss();
        });
    };
    SocialFriendsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SocialFriendsPage.prototype.getData = function () {
        var _this = this;
        var url2 = "http://api.givet.co.uk/api/get_twitter_friends.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id_2);
        this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + this.user_id_2;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            _this.soc_friend = data['social'];
        });
    };
    SocialFriendsPage.prototype.addUser = function (fp_id, user_id, auth_token_tw, oauth_token_secret_tw, user_id_soc_tw) {
        var _this = this;
        this.databaseProvider.addDeveloperSoc(fp_id, user_id, auth_token_tw, oauth_token_secret_tw, user_id_soc_tw).then(function (data) {
            _this.loadDB();
        });
        this.dev = {};
    };
    SocialFriendsPage.prototype.del = function () {
        var _this = this;
        this.databaseProvider.deleteDrop().then(function (data) {
            _this.socialLoginTwitter();
        });
    };
    SocialFriendsPage.prototype.socialLoginTwitter = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.TwitterAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
                // alert(JSON.stringify(result['credential']['secret']));
                //  this.addUser(this.fp_id,this.user_id_2,result['credential']['accessToken'],result['credential']['secret'],result['credential']['secret']);
                _this.getTw(_this.user_id_2, result['credential']['accessToken'], result['credential']['secret'], result['credential']['secret']);
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    SocialFriendsPage.prototype.getTw = function (user_id, auth_token_tw, oauth_token_secret_tw, user_id_soc_tw) {
        var _this = this;
        // alert(JSON.stringify("tyt"));
        var url2 = "http://api.givet.co.uk/api/set_twitter_friends.php";
        //this.presentLoadingDefault();
        var postData = new FormData();
        postData.append('user_id', user_id);
        postData.append('auth_token_tw', auth_token_tw);
        postData.append('oauth_token_secret_tw', oauth_token_secret_tw);
        postData.append('user_id_soc_tw', user_id_soc_tw);
        this.data2 = this.http.post(url2, postData);
        this.data2.subscribe(function (data2) {
            // this.items2 = data2['users'];
            _this.loading.dismiss();
            // alert(JSON.stringify(data2['users']));
            _this.getData();
        });
        this.loading.dismiss();
    };
    SocialFriendsPage.prototype.socialLoginFB = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
                _this.navCtrl.pop(_this.navCtrl.getActive().component);
                _this.fb_soc = 1;
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], SocialFriendsPage.prototype, "slides", void 0);
    SocialFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-social-friends',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\social-friends\social-friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >{{soc_friend}}</ion-title>\n   \n    \n  \n  \n   \n  </ion-navbar>\n  \n </ion-header>\n \n  <ion-content>\n\n \n      <ion-grid>\n          <ion-row>\n            <ion-col>\n                <button ion-button full (click)="prev()">Twitter</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button full (click)="next()">Facebook</button>\n            </ion-col>\n          </ion-row>\n          \n        </ion-grid>\n  \n      \n  \n      <ion-list >\n\n          <ion-slides #slides>\n              <ion-slide>\n                  <button *ngIf="items2 == null" ion-button class="twitter" (click)="socialLoginTwitter()"><ion-icon name="logo-twitter" style="margin-right: 12px;"></ion-icon> Twitter</button>\n                  <ion-col *ngFor="let item of items2"  no-padding>\n  \n                      <ion-card>\n            \n                          <ion-item>\n                              <ion-avatar item-start>\n                                <img src="{{item.profile_image_url_https}}">\n                              </ion-avatar>\n                             \n                              <h2>{{item.name}}</h2>\n                              <p>Twitter Friend</p>\n                              \n                \n                             \n                              \n                            </ion-item>\n                         \n                        \n              \n                          </ion-card>\n              \n                        </ion-col>\n              </ion-slide>\n\n              <ion-slide>\n\n              \n                <button ion-button *ngIf="fb_soc == null" class="facebook" (click)="socialLoginFB()"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon> Facebook</button>\n                <h2 *ngIf="fb_soc == 1">No friend to show</h2>\n              </ion-slide>\n\n              \n            </ion-slides>\n  \n          \n      </ion-list >\n  \n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\social-friends\social-friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], SocialFriendsPage);
    return SocialFriendsPage;
}());

//# sourceMappingURL=social-friends.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_create_products_create__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_view_products_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, http, loadingCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.searchBar = false;
        this.reset = navParams.get('reset');
        this.ides = navParams.get('id');
    }
    ProductsPage.prototype.ionViewDidEnter = function () {
        this.loadDB();
    };
    ProductsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.loadDB();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ProductsPage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://api.givet.co.uk/api/search_prod.php?fav_title=" + this.queryText + "&user_id=" + this.ides;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
    };
    ProductsPage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.loadDB();
    };
    ProductsPage.prototype.loadDB = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.dev = data;
            //alert(JSON.stringify(this.dev[0]['fp_id']));
            _this.fp_id = _this.dev[0]['fp_id'];
            _this.user_id_2 = _this.dev[0]['user_id'];
            _this.url = "http://api.givet.co.uk/api/get_lang.php?user_id=" + _this.user_id_2;
            _this.data = _this.http.get(_this.url);
            _this.data.subscribe(function (data) {
                _this.prod_lang = data['product'];
                _this.create_new = data['create_new'];
            });
            if (_this.ides != null) {
                _this.url = "http://api.givet.co.uk/api/get_products.php?user_id=" + _this.ides;
                _this.getData();
            }
            else if (_this.ides == null) {
                _this.url = "http://api.givet.co.uk/api/get_products.php?user_id=" + _this.user_id_2;
                _this.getData();
            }
        });
    };
    ProductsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ProductsPage.prototype.getData = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
            }
            else if (data['status'] == "400 OK") {
                _this.items = null;
            }
        });
        this.loading.dismiss();
    };
    ProductsPage.prototype.moToView = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_view_products_view__["a" /* ProductsViewPage */], {
            id: item['id']
        });
    };
    ProductsPage.prototype.moToCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__products_create_products_create__["a" /* ProductsCreatePage */], {
            user_id_test: this.ides
        });
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products\products.html"*/'<!--\n  Generated template for the WishListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!searchBar">{{prod_lang}}</ion-title>\n   \n  \n    <ion-buttons *ngIf="!searchBar && ides== user_id_2" end style="margin-right: 3px;">\n        <button ion-button icon-only (click)="moToCreate()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-searchbar *ngIf="searchBar" showCancelButton="true" (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n      (ionInput)="updateText($event)"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!searchBar" (click)="searchBar=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n      \n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingText="Pull to refresh..."\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n      \n  <ion-list>\n\n      <ion-list *ngIf="items == null " text-center>\n\n    \n          <button *ngIf="items == null && ides == user_id_2" (click)="moToCreate()" style=" background-color: #600051;margin:20px;" ion-button round>{{create_new}}</button>\n          <p *ngIf="items == null && ides != user_id_2"> Not found products</p>\n        </ion-list>\n  \n      \n     \n      \n\n      <ion-col *ngFor="let item of items"  no-padding>\n\n          <ion-card (click)="moToView(item)">\n              \n\n          \n            <img *ngIf="item.image != null && item.image.length > 0" src="https://givet.co.uk/backend/web/images/{{item.image}}"/>\n            <img *ngIf="item.image == null || item.image.length <= 0" src="https://givet.co.uk/backend/web/images/default-250x250.png"/>\n\n      \n                <ion-card-header class="bot-pd"  [innerHtml]="item.name">\n               \n            \n                </ion-card-header>\n    \n\n              <ion-card-header *ngIf=" item.rating == \'0\'" class="no-mg">\n\n\n\n                      <ion-icon  name="star" class=" unchecked 1"></ion-icon>\n                      \n                      <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n  \n                      \n                      \n                    </ion-card-header>\n\n\n              <ion-card-header *ngIf=" item.rating == \'1\'" class="no-mg">\n\n\n\n                  <ion-icon  name="star" class=" checked 1"></ion-icon>\n                  \n                  <ion-icon  name="star" class=" unchecked 2"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                  <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n\n                  \n                  \n                </ion-card-header>\n\n                <ion-card-header *ngIf=" item.rating == \'2\'" class="no-mg">\n\n\n\n                      <ion-icon  name="star" class=" checked 1"></ion-icon>\n                      \n                      <ion-icon  name="star" class=" checked 2"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 3"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                      <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n  \n                      \n                      \n                    </ion-card-header>\n\n                    <ion-card-header *ngIf=" item.rating == \'3\'" class="no-mg">\n\n\n\n                          <ion-icon  name="star" class=" checked 1"></ion-icon>\n                          \n                          <ion-icon  name="star" class=" checked 2"></ion-icon>\n                          <ion-icon  name="star" class=" checked 3"></ion-icon>\n                          <ion-icon  name="star" class=" unchecked 4"></ion-icon>\n                          <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n      \n                          \n                          \n                        </ion-card-header>\n\n                        <ion-card-header *ngIf=" item.rating == \'4\'" class="no-mg">\n\n\n\n                              <ion-icon  name="star" class=" checked 1"></ion-icon>\n                              \n                              <ion-icon  name="star" class=" checked 2"></ion-icon>\n                              <ion-icon  name="star" class=" checked 3"></ion-icon>\n                              <ion-icon  name="star" class=" checked 4"></ion-icon>\n                              <ion-icon  name="star" class=" unchecked 5"></ion-icon>\n          \n                              \n                              \n                            </ion-card-header>\n\n                            <ion-card-header *ngIf=" item.rating == \'5\'" class="no-mg">\n\n\n\n                                  <ion-icon  name="star" class=" checked 1"></ion-icon>\n                                  \n                                  <ion-icon  name="star" class=" checked 2"></ion-icon>\n                                  <ion-icon  name="star" class=" checked 3"></ion-icon>\n                                  <ion-icon  name="star" class=" checked 4"></ion-icon>\n                                  <ion-icon  name="star" class=" checked 5"></ion-icon>\n              \n                                  \n                                  \n                                </ion-card-header>\n\n                <ion-card-header class="no-mg">\n                    <span class="label label-success">                  \n                        <ion-icon name="md-cash"></ion-icon> {{item.price}}</span> \n                    \n                        <span class="label label-warning">                  \n                            <ion-icon name="ios-grid-outline"></ion-icon> {{item.quan}}</span> \n                  </ion-card-header>\n              \n            \n              <ion-card-content [innerHtml]="(item.details | slice:0:150) + (item.details.length > 150 ? \'...\' : \'\') ">\n                 \n              </ion-card-content>\n            \n            </ion-card>\n\n      </ion-col>\n\n\n      \n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_forget__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(toastCtrl, fb, navCtrl, navParams, http, loadingCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loginData = { email: '', password: '' };
        this.passwordtype = 'password';
        this.passeye = 'eye';
        this.result = [];
        this.expenses = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
        this.devs = [];
        this.dev = {};
        this.authForm = this.fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
        /*
                this.databaseProvider.getDatabaseState().subscribe(rdy=>{
                  if(rdy){
                    this.presentLoadingDefault();
                    this.loadDev();
                  }
                })*/
    }
    LoginPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    /*
    loadDev(){
      
      this.databaseProvider.getUsers().then(data=>{
        this.devs = data;
  
        //alert( data);
   
        if(data[0]['fp_id']!=null){
  
          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
  
        }else{
          this.loading.dismiss();
        }
      }).catch(this.loading.dismiss());
  
      this.loading.dismiss();
    }
  
  
    loadDevTW(){
      //this.presentLoadingDefault();
      this.databaseProvider.getUsersTW().then(data=>{
        this.devs = data;
    
        if(data[0]['fp_id']!=null){
  
          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
  
        }else{
          this.loading.dismiss();
        }
      }).catch(this.loading.dismiss());
  
      this.loading.dismiss();
    }
   
  */
    LoginPage.prototype.moveToForget = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__forget_forget__["a" /* ForgetPage */]);
    };
    /*------------------
    --------------------*/
    // Move to register page
    LoginPage.prototype.moveToRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    //Move to Home Page
    LoginPage.prototype.moveToHome = function () {
        var _this = this;
        if (this.loginData.email.length > 0 && this.loginData.password.length > 0) {
            this.presentLoadingDefault();
            var url = "http://api.givet.co.uk/api/login.php";
            var postData = new FormData();
            postData.append('username', this.loginData.email);
            postData.append('password', this.loginData.password);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                _this.loading.dismiss();
                if (data['fp_id'] != null) {
                    _this.loading.dismiss();
                    //  this.addUser(data['fp_id'],data['user_id']);
                }
                else {
                    _this.loading.dismiss();
                    _this.presentUser();
                }
            });
        }
        else {
            this.loading.dismiss();
            this.presentError();
        }
        this.loading.dismiss();
    };
    LoginPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Field is empty',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.presentUser = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'This user is not registered',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.presentToast = function (err) {
        var toast = this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype.presentAlert = function (err) {
    };
    /*
          del(){
            this.databaseProvider.deleteDrop().then(data=>{
              this.loadDev();
            });
          }
    
    
          addUserSoc(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw){
            
            this.databaseProvider.addDeveloperSoc(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw).then(data =>{
              this.loadDevTW();
            })
            this.dev =  {};
          }
    
          
          addUser(fp_id, user_id){
            
            this.databaseProvider.addDeveloper(fp_id, user_id).then(data =>{
              this.loadDev();
            })
            this.dev =  {};
          }*/
    LoginPage.prototype.managePassword = function () {
        if (this.passwordtype == 'password') {
            this.passwordtype = 'text';
            this.passeye = 'eye-off';
        }
        else {
            this.passwordtype = 'password';
            this.passeye = 'eye';
        }
    };
    LoginPage.prototype.forgetpassword = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage.prototype.socialLoginFB = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().getRedirectResult().then(function (result) {
                var url = "http://api.givet.co.uk/api/login_social.php";
                var postData = new FormData();
                postData.append('username', result['user']['email']);
                _this.data = _this.http.post(url, postData);
                _this.data.subscribe(function (data) {
                    // alert(JSON.stringify(data));
                    if (data['user_id'] != null) {
                        //  this.addUser(data['fp_id'],data['user_id']);
                    }
                    else {
                        _this.presentUser();
                    }
                });
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    LoginPage.prototype.socialLoginGoogle = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().getRedirectResult().then(function (result) {
                var url = "http://api.givet.co.uk/api/login_social.php";
                var postData = new FormData();
                postData.append('username', result['user']['email']);
                _this.data = _this.http.post(url, postData);
                _this.data.subscribe(function (data) {
                    //alert(JSON.stringify(data));
                    if (data['user_id'] != null) {
                        // this.addUser(data['fp_id'],data['user_id']);
                    }
                    else {
                        _this.presentUser();
                    }
                });
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    LoginPage.prototype.socialLoginTwitter = function () {
        var _this = this;
        var provide = new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.TwitterAuthProvider();
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithRedirect(provide).then(function () {
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().getRedirectResult().then(function (result) {
                var url = "http://api.givet.co.uk/api/login_social.php";
                var postData = new FormData();
                postData.append('username', result['additionalUserInfo']['username']);
                _this.data = _this.http.post(url, postData);
                _this.data.subscribe(function (data) {
                    _this.tw = '1';
                    // alert(JSON.stringify(result['credential']['secret']));
                    if (data['user_id'] != null) {
                        //   this.addUserSoc(data['fp_id'],data['user_id'],result['credential']['accessToken'],result['credential']['secret'],result['credential']['secret']);
                    }
                    else {
                        _this.presentUser();
                    }
                });
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\login\login.html"*/'<!--\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>\n    <ion-icon name="md-contact"></ion-icon>\n    &nbsp;Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="bg-img">\n\n  <div class="main-content">\n    <div padding text-center class="container-logo">\n      <img src="assets/imgs/logo.png">\n    </div>\n    <div padding class="container-bottom">   \n      <div class="errormsg">\n        <div *ngIf="email.errors && email.touched">\n            <p>Email is required.</p>\n        </div>\n        <div *ngIf="password.errors && password.touched">\n            <p>Password is required.</p>\n        </div>\n      </div>\n\n        <ion-list>\n          <ion-item padding-right>\n            <ion-label>\n              <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n            </ion-label>\n            <ion-input [(ngModel)]="loginData.email" [formControl]="email" id="email" type="text" required placeholder="Email *"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n            </ion-label>\n              <ion-input [(ngModel)]="loginData.password" [formControl]="password" id="password" type="{{passwordtype}}" required placeholder="Password *"></ion-input>\n            <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>\n          </ion-item>\n        </ion-list>\n        <button type="submit" ion-button full color="dark" (click)="moveToHome()">Sign In</button>\n   \n   \n  </div>\n\n\n\n    \n    <div class="sepretor-or" padding-horizontal> <p>Or</p></div>\n\n    <div text-center class="socialLogin" padding>\n      <button ion-button class="google" (click)="socialLoginGoogle()"><ion-icon name="logo-google" style="margin-right: 12px;"></ion-icon>Google</button>\n      <button ion-button class="facebook" (click)="socialLoginFB()"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon> Facebook</button>\n      <button ion-button class="twitter" (click)="socialLoginTwitter()"><ion-icon name="logo-twitter" style="margin-right: 12px;"></ion-icon> Twitter</button>\n    </div>\n\n    <div padding text-center class="form-bottom-text" ><a href="javascript:void(0);" (click)="forgetpassword()"> Forgot password?</a></div>\n    <div padding text-center class="form-bottom-text">\n      <label>Don\'t have an Account? <a href="javascript:void(0);" (click)="moveToRegister()">Sign up</a></label>\n    </div>\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\WishList\Givet\src\pages\login\login.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.js.map