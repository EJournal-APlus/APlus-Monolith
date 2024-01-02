﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRM_SYSTEM.DAL.Models
{
    public class Status
    {
        public int Id { get; set; }
        public string StatusName { get; set; } = null!;
        public List<User> Users { get; set; } = new();
    }
}
