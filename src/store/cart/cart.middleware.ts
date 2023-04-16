const cartMiddleware = (store: any) => (next: any) => (action: any) => {
    if (action.type === "cart/setCart") {
      const cartState = JSON.parse(localStorage.getItem("cart") || "{}");
      store.dispatch({ type: "cart/setCart", payload: cartState });
    }
    next(action);
  };
  