import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";
import { CartProvider } from './hooks/CartProvider'; // Adjust the path as necessary
import { AuthProvider } from "./hooks/AuthProvider";
import Header from "/home/vare/project/microservices_1/ecommerce_1/Barnes-Clone-Frontend/src/components/layout/Header.tsx";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<CartProvider>
					<Header/>
					<RouterProvider router={router} />
			{/* <TanStackRouterDevelopmentTools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
			<ReactQueryDevtools initialIsOpen={false} /> */}
				</CartProvider>
			</AuthProvider>
		</QueryClientProvider>
	);
};

export default App;
