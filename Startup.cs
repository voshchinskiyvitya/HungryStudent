using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using HungryStudent.App_Start;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(HungryStudent.Startup))]
namespace HungryStudent
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}