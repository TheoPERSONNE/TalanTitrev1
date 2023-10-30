using System;
using System.Collections.Generic;

namespace my_new_app.Entities;

public partial class Commande
{
    public int IdCommande { get; set; }

    public DateTime DateDeLivraison { get; set; }

    public int Numéro { get; set; }

    public bool Statut { get; set; }

    public int ProduitIdProduit { get; set; }

    public virtual Produit ProduitIdProduitNavigation { get; set; } = null!;
}
