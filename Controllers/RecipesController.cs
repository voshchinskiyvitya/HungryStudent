using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HungryStudent.DataAccess.Repositories;
using HungryStudent.DataAccess.Models;
using WebGrease.Css.Extensions;

namespace HungryStudent.Controllers
{
    public class RecipesController : Controller
    {
        private readonly IRecipesRepository _recipesRepository;

        public RecipesController(IRecipesRepository recipesRepository)
        {
            _recipesRepository = recipesRepository;
        }

        public JsonResult GetRecipes(int[] productIds)
        {
            List<Recipe> recipes;

            if (productIds == null || productIds.Count() == 0)
            {
                recipes = _recipesRepository.GetAll().ToList();
                
            }
            else
            {
                recipes = _recipesRepository
                    .GetAll()
                    .Where(r => r.Products.All(p => productIds.Contains(p.Id)))
                    .ToList();
            }

            return Json(recipes, JsonRequestBehavior.AllowGet);
        }
    }
}