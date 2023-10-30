using System;
using System.Collections.Generic;

namespace my_new_app.Entities;

public partial class Produit
{
    public int IdProduit { get; set; }

    public string NomProduit { get; set; } = null!;

    public decimal PrixUnitaire { get; set; }

    public virtual ICollection<Commande> Commandes { get; set; } = new List<Commande>();
}
