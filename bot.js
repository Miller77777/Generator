import discord
from discord.ext import commands
from discord.ext.commands import Bot
import random

Client = discord.Client()
bot = commands.Bot(command_prefix="!")
lines = open(r'accounts.txt').read().splitlines()

@bot.event
async def on_ready():
    print("The bot is online!")

@bot.command(pass_context=True)
async def gen(ctx):
    userName = ctx.message.author.name
    userID = ctx.message.author.id

    if ctx.message.server:
        await bot.delete_message(ctx.message)
    myline = random.choice(lines)
    split = myline.partition(":")
    
    embed=discord.Embed(title="Minecraft Account", color=0xf45eff)
    embed.set_thumbnail(url="https://pre00.deviantart.net/3d13/th/pre/i/2016/343/0/7/free_minecraft_logo_template_by_curtzeninja-dar2dou.png")
    embed.add_field(name="Email:", value=split[0], inline=False)
    embed.add_field(name="Password:", value=split[2], inline=False)
    await bot.send_message(ctx.message.author, embed=embed)

    print("{} Typed !gen".format(userName))

bot.run("NDU2NDYxODExMjY1MzA2NjQ1.DgK8Ag.5DXIiBy6fepeiWwUNGu4tKK3Gv8")
