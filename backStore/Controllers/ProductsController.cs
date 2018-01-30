using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backStore.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly LessonContext _context;
        public ProductsController(LessonContext context)
        {
            _context = context;
            _context.SaveChanges();
        }
        // GET api/values
        [HttpGet]
        public List<Product> Get()
        {
            return _context.Products.ToList();
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            foreach (Product p in _context.Products.ToList())
            {
                if (p.Id == id)
                {
                    return p;
                }
            }
            return null;
        }  
    }
}
