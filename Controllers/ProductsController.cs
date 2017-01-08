using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HungryStudent.DataAccess.Models;
using HungryStudent.DataAccess.Repositories;

namespace HungryStudent.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public JsonResult GetProducts(string keyWord)
        {
            var productsList = new List<Product>();

            if (string.IsNullOrEmpty(keyWord))
            {
                return Json(productsList, JsonRequestBehavior.AllowGet);
            }

            var products = _productRepository.GetAll();
            productsList = products.Where(p => p.Name.Contains(keyWord)).ToList();
            return Json(productsList, JsonRequestBehavior.AllowGet);
        }
    }
}