class Config {


    static sidebarItem = [

    ];
    static contactApiURL = "http://localhost:8080/api/contact";
    static brandApiURL = "http://localhost:8080/api/brand";
    static brandDetailApiURL = "http://localhost:8080/api/brand/<int:pk>";
    static postApiURL = "http://localhost:8080/api/posts/";
    static postDetailApiURL = "http://localhost:8080/api/posts/<int:pk>/";
    static loginUrl = "http://localhost:8080/api/gettoken/";
    static refreshApiUrl = "http://127.0.0.1:8080/api/resfresh_token/";
    static wishlistApiURL = "http://localhost:8080/api/wishlist1/";
    static wishlistDetailApiURL = "http://localhost:8080/api/wishlist1/<int:pk>";

    static homeUrl = "/admin/home";
    static logoutPageUrl = "/admin/logout";



    static sidebarItem = [
        { index: "0",
         title: "Home", 
         url: "/admin/home", 
         icons: "home" },
        {
          index: "1",
          title: "Manage Category",
          url: "/admin/category",
          icons: "settings",
        },
        {
            index: "2",
            title: "Manage Brand",
            url: "/admin/brand",
            icons: "settings",
          },
          {
            index: "3",
            title: "Manage Products",
            url: "/admin/product",
            icons: "settings",
          },
          {
            index: "4",
            title: "Show Contacts",
            url: "/admin/contact",
            icons: "people",
          },
      ];
















}

export default Config;
