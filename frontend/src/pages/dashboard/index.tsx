import Navbar from "../../components/navbar";
import BarChart from "../../components/barchart";
import DonutChart from "../../components/donutchart";
import DataTable from "../../components/datatable";
import Footer from "../../components/footer";

const Dashboard = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="container">
          <h1 className="text-primary py-3">Dashboard de vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas as vendas</h5>
              <DonutChart />
            </div>
          </div>
          <div className="py-3">
            <h2 className="text-primay">Todas vendas</h2>
          </div>
          <DataTable />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Dashboard;