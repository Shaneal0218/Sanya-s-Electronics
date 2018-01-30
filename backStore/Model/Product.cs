using System;
using System.Collections.Generic;
namespace backStore
{
    public class Product
    {
        public int Id { get; set; }
        public string Product_Name { get; set; }
        public string Product_Category { get; set; }
        public string Product_Brand { get; set; }
        public int Product_Cost { get; set; }
        public int Product_Quantity {get; set; }
        public string Product_Image { get; set; }
    }
}