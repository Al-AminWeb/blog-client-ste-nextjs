import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import {userServices} from "@/services/user.services";
import {Roles} from "@/constants/roles";

export default async function DashboardLayout({
                                            admin,
                                            user,
                                        }: {
    children: React.ReactNode;
    admin: React.ReactNode;
    user: React.ReactNode;
}) {

    const {data} = await userServices.getSession();



    const userInfo = data.user;

    return (
        <SidebarProvider>
            <AppSidebar user={userInfo} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {userInfo.role === Roles.admin ? admin : user}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
