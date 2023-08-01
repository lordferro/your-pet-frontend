export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsUpdating = state => state.auth.isUpdating;

export const selectShowGreeting = state => state.auth.isGreetingShow;
