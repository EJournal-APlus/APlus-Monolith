using CRM_SYSTEM.BLL.Interfaces;
using CRM_SYSTEM.BLL.Services;
using CRM_SYSTEM.DAL.Data;
using CRM_SYSTEM.DAL.Interfaces;
using CRM_SYSTEM.DAL.Repositories;
using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_allowall";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationContext>(options => options.UseMySQL(connectionString!));
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173/",
                                              "http://localhost:5173/addcard").AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                      });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
