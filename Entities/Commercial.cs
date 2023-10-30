using System;
using System.Collections.Generic;

namespace my_new_app.Entities;

public partial class Commercial
{
    public int IdCommercial { get; set; }

    public bool UtilisateurVue { get; set; }

    public int UtilisateurIdtable1 { get; set; }

    public virtual Utilisateur UtilisateurIdtable1Navigation { get; set; } = null!;
}
