using System;
using System.Collections.Generic;

namespace my_new_app.Entities;

public partial class Article
{
    public int IdArticle { get; set; }

    public string Titre { get; set; } = null!;

    public string SousTitre { get; set; } = null!;

    public string Contenue { get; set; } = null!;

    public virtual ICollection<Admin> AdminIdAdmins { get; set; } = new List<Admin>();
}
