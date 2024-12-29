This repository demonstrates a bug in React Router Dom v6 where route navigation fails intermittently.  The issue appears to be related to how component updates are handled within the router context. The solution provides a workaround using `useLocation` to force a re-render when the route changes.