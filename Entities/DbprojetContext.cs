using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace my_new_app.Entities;

public partial class DbprojetContext : DbContext
{
    public DbprojetContext()
    {
    }

    public DbprojetContext(DbContextOptions<DbprojetContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Article> Articles { get; set; }

    public virtual DbSet<Commande> Commandes { get; set; }

    public virtual DbSet<Commercial> Commercials { get; set; }

    public virtual DbSet<Produit> Produits { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    public virtual DbSet<Utilisateur> Utilisateurs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server= localhost;port=3306;user=root;password=Lionceaux999*;database=dbprojet");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.IdAdmin).HasName("PRIMARY");

            entity.ToTable("admin");

            entity.HasIndex(e => e.UtilisateurIdtable1, "fk_Admin_Utilisateur1_idx");

            entity.Property(e => e.IdAdmin).HasColumnName("idAdmin");
            entity.Property(e => e.UtilisateurIdtable1).HasColumnName("Utilisateur_idtable1");

            entity.HasOne(d => d.UtilisateurIdtable1Navigation).WithMany(p => p.Admins)
                .HasForeignKey(d => d.UtilisateurIdtable1)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_Admin_Utilisateur1");

            entity.HasMany(d => d.ArticleIdArticles).WithMany(p => p.AdminIdAdmins)
                .UsingEntity<Dictionary<string, object>>(
                    "AdminHasArticle",
                    r => r.HasOne<Article>().WithMany()
                        .HasForeignKey("ArticleIdArticle")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("fk_Admin_has_Article_Article1"),
                    l => l.HasOne<Admin>().WithMany()
                        .HasForeignKey("AdminIdAdmin")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("fk_Admin_has_Article_Admin1"),
                    j =>
                    {
                        j.HasKey("AdminIdAdmin", "ArticleIdArticle").HasName("PRIMARY");
                        j.ToTable("admin_has_article");
                        j.HasIndex(new[] { "AdminIdAdmin" }, "fk_Admin_has_Article_Admin1_idx");
                        j.HasIndex(new[] { "ArticleIdArticle" }, "fk_Admin_has_Article_Article1_idx");
                        j.IndexerProperty<int>("AdminIdAdmin").HasColumnName("Admin_idAdmin");
                        j.IndexerProperty<int>("ArticleIdArticle").HasColumnName("Article_idArticle");
                    });
        });

        modelBuilder.Entity<Article>(entity =>
        {
            entity.HasKey(e => e.IdArticle).HasName("PRIMARY");

            entity.ToTable("article");

            entity.Property(e => e.IdArticle).HasColumnName("idArticle");
            entity.Property(e => e.Contenue).HasMaxLength(250);
            entity.Property(e => e.SousTitre).HasMaxLength(45);
            entity.Property(e => e.Titre).HasMaxLength(45);
        });

        modelBuilder.Entity<Commande>(entity =>
        {
            entity.HasKey(e => e.IdCommande).HasName("PRIMARY");

            entity.ToTable("commande");

            entity.HasIndex(e => e.ProduitIdProduit, "fk_Commande_Produit1_idx");

            entity.Property(e => e.IdCommande).HasColumnName("idCommande");
            entity.Property(e => e.DateDeLivraison).HasColumnType("datetime");
            entity.Property(e => e.ProduitIdProduit).HasColumnName("Produit_idProduit");

            entity.HasOne(d => d.ProduitIdProduitNavigation).WithMany(p => p.Commandes)
                .HasForeignKey(d => d.ProduitIdProduit)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_Commande_Produit1");
        });

        modelBuilder.Entity<Commercial>(entity =>
        {
            entity.HasKey(e => e.IdCommercial).HasName("PRIMARY");

            entity.ToTable("commercial");

            entity.HasIndex(e => e.UtilisateurIdtable1, "fk_Commercial_Utilisateur1_idx");

            entity.Property(e => e.IdCommercial).HasColumnName("idCommercial");
            entity.Property(e => e.UtilisateurIdtable1).HasColumnName("Utilisateur_idtable1");

            entity.HasOne(d => d.UtilisateurIdtable1Navigation).WithMany(p => p.Commercials)
                .HasForeignKey(d => d.UtilisateurIdtable1)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_Commercial_Utilisateur1");
        });

        modelBuilder.Entity<Produit>(entity =>
        {
            entity.HasKey(e => e.IdProduit).HasName("PRIMARY");

            entity.ToTable("produit");

            entity.Property(e => e.IdProduit).HasColumnName("idProduit");
            entity.Property(e => e.NomProduit).HasMaxLength(45);
            entity.Property(e => e.PrixUnitaire).HasPrecision(10);
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.IdTicket).HasName("PRIMARY");

            entity.ToTable("ticket");

            entity.Property(e => e.IdTicket).HasColumnName("idTicket");
            entity.Property(e => e.Problème).HasMaxLength(45);
        });

        modelBuilder.Entity<Utilisateur>(entity =>
        {
            entity.HasKey(e => e.Idtable1).HasName("PRIMARY");

            entity.ToTable("utilisateur");

            entity.Property(e => e.Idtable1).HasColumnName("idtable1");
            entity.Property(e => e.Age).HasMaxLength(45);
            entity.Property(e => e.Email).HasMaxLength(45);
            entity.Property(e => e.Nom).HasMaxLength(45);
            entity.Property(e => e.Prénom).HasMaxLength(45);
            entity.Property(e => e.Ville).HasMaxLength(45);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
