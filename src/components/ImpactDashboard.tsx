
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, GraduationCap, Heart, MapPin } from 'lucide-react';

const ImpactDashboard = () => {
  // Sample data for charts
  const lgaData = [
    { name: 'Dutse', beneficiaries: 850, color: '#003366' },
    { name: 'Hadejia', beneficiaries: 720, color: '#66CCFF' },
    { name: 'Kazaure', beneficiaries: 650, color: '#1A1A1A' },
    { name: 'Gumel', beneficiaries: 580, color: '#003366' },
    { name: 'Ringim', beneficiaries: 520, color: '#66CCFF' },
    { name: 'Birnin Kudu', beneficiaries: 480, color: '#1A1A1A' }
  ];

  const monthlyData = [
    { month: 'Jan', disbursements: 450000, beneficiaries: 380 },
    { month: 'Feb', disbursements: 520000, beneficiaries: 420 },
    { month: 'Mar', disbursements: 680000, beneficiaries: 510 },
    { month: 'Apr', disbursements: 750000, beneficiaries: 580 },
    { month: 'May', disbursements: 820000, beneficiaries: 620 },
    { month: 'Jun', disbursements: 920000, beneficiaries: 680 }
  ];

  const projectData = [
    { name: 'Education Support', value: 2500, color: '#003366' },
    { name: 'Girls Empowerment', value: 1200, color: '#66CCFF' },
    { name: 'Economic Grants', value: 800, color: '#1A1A1A' },
    { name: 'Feeding Programs', value: 500, color: '#4A90E2' }
  ];

  const stats = [
    {
      title: 'Total Beneficiaries',
      value: '5,000+',
      icon: Users,
      color: 'bg-foundation-blue',
      trend: '+15% this month'
    },
    {
      title: 'Bursaries Awarded',
      value: '2,500+',
      icon: GraduationCap,
      color: 'bg-foundation-light',
      trend: '+12% this month'
    },
    {
      title: 'Girls Empowered',
      value: '1,200+',
      icon: Heart,
      color: 'bg-foundation-dark',
      trend: '+20% this month'
    },
    {
      title: 'LGAs Covered',
      value: '27',
      icon: MapPin,
      color: 'bg-accent',
      trend: 'All in Jigawa'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foundation-dark mb-6">
            Impact <span className="text-foundation-blue">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights into our foundation's reach and impact across Jigawa State
          </p>
          <div className="w-24 h-1 bg-foundation-light mx-auto mt-6"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold text-foundation-dark mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium mb-2">{stat.title}</p>
              <p className="text-sm text-green-600 font-medium">{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Beneficiaries by LGA */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-foundation-dark mb-6">Beneficiaries by LGA</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={lgaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#003366', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Bar dataKey="beneficiaries" fill="#003366" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Project Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-foundation-dark mb-6">Project Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {projectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#003366', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {projectData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-foundation-dark mb-6">Monthly Disbursements & Beneficiaries</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis yAxisId="left" stroke="#666" />
              <YAxis yAxisId="right" orientation="right" stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#003366', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="disbursements" 
                stroke="#003366" 
                fill="#66CCFF" 
                fillOpacity={0.3}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="beneficiaries" 
                stroke="#1A1A1A" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
