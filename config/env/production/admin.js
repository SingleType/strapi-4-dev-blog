module.exports =({env}) => {

    return {
        url: env("PUBLIC_ADMIN_URL", "/dashboard"),
        serveAdminPanel: env("PUBLIC_ADMIN_URL") == undefined,
    };
};