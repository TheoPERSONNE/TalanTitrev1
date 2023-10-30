using System;
using System.Collections.Generic;

namespace my_new_app.Entities;

public partial class Admin
{
    public int IdAdmin { get; set; }

    public bool UtilisateurVue { get; set; }

    public bool ArticleVue { get; set; }

    public int UtilisateurIdtable1 { get; set; }

    public virtual Utilisateur UtilisateurIdtable1Navigation { get; set; } = null!;

    public virtual ICollection<Article> ArticleIdArticles { get; set; } = new List<Article>();
}
