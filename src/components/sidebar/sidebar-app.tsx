'use client';

import { createContext } from 'react';

const SidebarContext = createContext({});

export const SidebarProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const data = {};

	return (
		<SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>
	);
};
