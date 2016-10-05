using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HungryStudent.DataAccess.Repositories;

namespace HungryStudent.Controllers
{
    public class HomeController : Controller
    {
        private readonly IRecipesRepository _recipesRepository;

        public HomeController(IRecipesRepository recipesRepository)
        {
            _recipesRepository = recipesRepository;
        }

        public ActionResult Index()
        {
            _recipesRepository.Get(1);
            return View();
        }
    }
}