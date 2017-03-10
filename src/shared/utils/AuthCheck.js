export default class AuthCheck {
    static goToPathIfAuth(store, path) {
        return (nextState, replace) => {
            const { login } = store.getState();

            if (login.isAuthenticated) {
                replace({
                    pathname: path,
                    state: {
                        nextPathname: nextState.location.pathname
                    }
                });
            }
        };
    }

    static goToPathIfNotAuth(store, path) {
        return (nextState, replace) => {
            const { login } = store.getState();

            if (!login.isAuthenticated) {
                replace({
                    pathname: `${path}&sec_redir=${nextState.location.pathname}`,
                });
            }
        };
    }
}