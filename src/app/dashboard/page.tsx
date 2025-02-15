
import StatisticsCharts from '@/components/statistics-chatrs';
import { AdminHeader } from '@/components/AdminHeader';
import { AdminSidebar } from '@/components/AdminSidsebar';

 export default  function Dashboard() {
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <StatisticsCharts />
        </div>
    )
}