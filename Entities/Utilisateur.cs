using System;
using System.Collections.Generic;

namespace my_new_app.Entities;

public partial class Utilisateur
{
    public int Idtable1 { get; set; }

    public string Nom { get; set; } = null!;

    public string Prénom { get; set; } = null!;

    public string Age { get; set; } = null!;

    public string Ville { get; set; } = null!;

    public int Téléphone { get; set; }

    public string Email { get; set; } = null!;

    public int CodePostal { get; set; }

    public bool Newletter { get; set; }

    public int Fixe { get; set; }

    public virtual ICollection<Admin> Admins { get; set; } = new List<Admin>();

    public virtual ICollection<Commercial> Commercials { get; set; } = new List<Commercial>();
}
