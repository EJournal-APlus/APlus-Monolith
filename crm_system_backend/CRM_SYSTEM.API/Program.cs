using CRM_SYSTEM.DAL.Data;
using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_allowall";
var builder = WebApplication.CreateBuilder(args);

string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationContext>(options => options.UseMySQL(connectionString!));
builder.Services.AddControllersWithViews();
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

app.Run();

