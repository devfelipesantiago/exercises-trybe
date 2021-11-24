def delete_duplicates(self):
    list_with_unique_elements = self()

    while self:
        current_node = self.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
