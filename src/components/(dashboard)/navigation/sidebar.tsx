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
import {
  Sidebar,
  SidebarItem,
  SidebarSection,
} from "@/components/ui/resizable-sidebar";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarSection section="Main Menu" />
      <SidebarItem
        href="/dashboard"
        icon={<IconHomeFilled size={20} />}
        text="Dashboard"
      />
      <SidebarItem
        href="/dashboard/insight"
        icon={<IconChartHistogram size={20} />}
        text="Insight"
      />
      <SidebarItem
        href="/dashboard/invoices"
        icon={<IconFileInvoice size={20} />}
        text="Invoices"
      />
      <SidebarItem
        href="/dashboard/products"
        icon={<IconPackage size={20} />}
        text="Products"
      />
      <SidebarItem
        href="/dashboard/reimburse"
        icon={<IconCreditCardRefund size={20} />}
        text="Reimburse"
      />
      <SidebarItem
        alert
        href="/dashboard/inbox"
        icon={<IconMessage size={20} />}
        text="Inbox"
      />
      <SidebarItem
        href="/dashboard/people"
        icon={<IconUsers size={20} />}
        text="People & Teams"
      />

      <SidebarSection section="Preferences" />
      <SidebarItem
        href="/dashboard/settings"
        icon={<IconSettings size={20} />}
        text="Settings"
      />
      <SidebarItem
        href="/dashboard/help"
        icon={<IconInfoCircle size={20} />}
        text="Help Center"
      />
    </Sidebar>
  );
}
