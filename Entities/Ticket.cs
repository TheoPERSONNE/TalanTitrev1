using System;
using System.Collections.Generic;

namespace my_new_app.Entities;

public partial class Ticket
{
    public int IdTicket { get; set; }

    public string Problème { get; set; } = null!;
}
