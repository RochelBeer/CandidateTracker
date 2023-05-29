using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CandidateTracker61.Data.Migrations
{
    public partial class @fixed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Candidates");

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Candidates",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Candidates");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Candidates",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
