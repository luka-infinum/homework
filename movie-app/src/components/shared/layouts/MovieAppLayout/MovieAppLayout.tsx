import { HStack, ScrollArea } from "@chakra-ui/react";
import { SidebarNavigation } from "../../SidebarNavigation/SidebarNavigation";
import { ReactNode } from "react";


interface IMovieAppLayoutProps {
    children?: ReactNode | ReactNode[]
}

export default function MovieAppLayout({ children } : IMovieAppLayoutProps) {
    return (
        <HStack backgroundColor="blue.700">
            <SidebarNavigation />
            <ScrollArea.Root height="100vh" size="xs">
                <ScrollArea.Viewport>
                    <ScrollArea.Content spaceY="4" textStyle="sm">
                        {children}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </HStack>
    );
}