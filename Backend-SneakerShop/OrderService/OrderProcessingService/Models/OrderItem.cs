﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderService.Models
{
    public class OrderItem
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int SneakerId { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }

        [ForeignKey("OrderId")]
        public Order? OrderId { get; set; }
    }
}