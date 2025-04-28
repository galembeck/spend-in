import {
  Sidebar,
  SidebarItem,
  SidebarSection,
} from "@/components/ui/resizable-sidebar";

import {
  IconChartHistogram,
  IconCreditCardRefund,
  IconFileInvoice,
  IconHomeFilled,
  IconInfoCircle,
  IconMessage,
  IconPackage,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

export function DashboardSidebar() {
  return (
    <>
      <Sidebar>
        <SidebarSection section="Main Menu" />
        <SidebarItem
          icon={<IconHomeFilled size={20} />}
          text="Dashboard"
          href="/dashboard"
        />
        <SidebarItem
          icon={<IconChartHistogram size={20} />}
          text="Insight"
          href="/dashboard/insight"
        />
        <SidebarItem
          icon={<IconFileInvoice size={20} />}
          text="Invoices"
          href="/dashboard/invoices"
        />
        <SidebarItem
          icon={<IconPackage size={20} />}
          text="Products"
          href="/dashboard/products"
        />
        <SidebarItem
          icon={<IconCreditCardRefund size={20} />}
          text="Reimburse"
          href="/dashboard/reimburse"
        />
        <SidebarItem
          icon={<IconMessage size={20} />}
          text="Inbox"
          href="/dashboard/inbox"
          alert
        />
        <SidebarItem
          icon={<IconUsers size={20} />}
          text="People & Teams"
          href="/dashboard/people"
        />

        <SidebarSection section="Preferences" />
        <SidebarItem
          icon={<IconSettings size={20} />}
          text="Settings"
          href="/dashboard/settings"
        />
        <SidebarItem
          icon={<IconInfoCircle size={20} />}
          text="Help Center"
          href="/dashboard/help"
        />
      </Sidebar>
    </>
  );
}
