game_2 = [
	[3, 5, 5, 3],
	[5, 5, 5, 5],
	[0, 3, 3, 5],
	[3, 3, 3, 10]

]

print(game_2)

for array in game_2:
	print(array, game_2.index(array))
	for element in array:
		print(element, array.index(element))


print(game_2[2][1])