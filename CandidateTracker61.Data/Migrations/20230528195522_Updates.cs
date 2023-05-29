using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CandidateTracker61.Data.Migrations
{
    public partial class Updates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Candidates",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Candidates",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RegistrationStatus",
                table: "Candidates",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Candidates");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Candidates");

            migrationBuilder.DropColumn(
                name: "RegistrationStatus",
                table: "Candidates");
        }
    }
}
