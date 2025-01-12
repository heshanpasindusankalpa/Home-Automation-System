using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Home_Automation_Desktop
{
    class DeviceDbContext:DbContext
    {
        public DbSet<Devices> devices { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=D:\eng\3rd\GUI\GitHub\Home-Automation-System\HomeAutomation.db");

        }


    }
}
