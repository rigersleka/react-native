navigate.push -> Each time you call push we add a new route to the navigation stack. When you call navigate it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack.

createStackNavigatorProvides -> a way for your app to transition between screens, where each new screen is placed on top of a stack.
 