﻿namespace SneakerStoreApi.Models
{
    public class Sneaker
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string ImageUrl { get; set; }
    }
}