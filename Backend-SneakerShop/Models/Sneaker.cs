﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SneakerStoreApi.Models
{
    public class Sneaker
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(256)] public string Name { get; set; }
        [MaxLength(1024)] public string Description { get; set; }
        public int Price { get; set; }
        [MaxLength(1024)] public string ImageUrl { get; set; }
    }
}