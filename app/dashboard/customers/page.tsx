import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <div className="w-full">
      <CustomersTable customers={customers} />
    </div>
  );
}