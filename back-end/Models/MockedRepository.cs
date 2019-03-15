using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEndAPIs.Models;

namespace BackEndAPIs
{
    public class MockedRepository
    {
        public static IList<Product> GetAllProducts()
        {
            return new List<Product> { new Product { ID = 1, Name = "Product 1" } ,
                                       new Product { ID = 2, Name = "Product 2" }};
        }
    }
}
