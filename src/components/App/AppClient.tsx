import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "layout/default";
import { Provider } from "react-redux";
import store from "components/App/store";
import AzureAuth from "components/App/AzureAuth";
import { RoutedContent } from "routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const basePath = process.env.BASE_PATH || "/";

const queryClient = new QueryClient();

const AppClient = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router basename={basePath}>
          <AppLayout>
            <RoutedContent />
          </AppLayout>
        </Router>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppClient;
