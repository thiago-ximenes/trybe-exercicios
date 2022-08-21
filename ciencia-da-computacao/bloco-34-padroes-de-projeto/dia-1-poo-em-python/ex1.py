class TV:
    def __init__(self, tamanho):
        self.__tamanho = tamanho
        self.__ligada = False
        self.__volume = 50
        self.__canal = 1
        self.__max_volume = 99
        self.__min_volume = 0

    @property
    def volume(self):
        return self.__volume

    @volume.setter
    def volume(self, modify_volume):
        if self.volume <= self.__max_volume:
            self.__volume += modify_volume

    def aumentar_volume(self):
        self.volume = 1
        print(self.volume)

    def diminuir_volume(self):
        self.volume = -1
        print(self.volume)


new_tv = TV(42)
new_tv.aumentvciwar_volume()
new_tv.aumentar_volume()
new_tv.diminuir_volume()
new_tv.diminuir_volume()
