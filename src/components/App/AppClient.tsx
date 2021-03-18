import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "layout/default";
import { RoutedContent } from "routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const basePath = process.env.BASE_PATH || "/";

const queryClient = new QueryClient();

const AppClient = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={basePath}>
        <AppLayout>
          <RoutedContent />
        </AppLayout>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppClient;
