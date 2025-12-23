# Maze Adventure Game

Maze Adventure Game is a desktop game built using **Java Swing** as a practical
project for the **Object-Oriented Programming (OOP)** course.
The game generates a random maze, allows the player to move inside it,
tracks time and score, and provides automatic maze solving using DFS.

---

## Overview

This project demonstrates the application of core OOP concepts combined with
basic algorithms and GUI programming.
The player navigates through a randomly generated maze and tries to reach
the exit before the score runs out.

The project focuses on clean code structure, separation of responsibilities,
and event-driven programming.

---

## Highlight Reel

- Random maze generation using DFS
- Player movement with collision detection
- Smooth player animation using Timer
- Maze solving using DFS and backtracking
- Timer and score system
- Multiple difficulty levels (Easy, Medium, Hard)
- Sound effects for actions (move, win, lose, error)
- Custom dialogs for win, loss, and confirmations
- Clear game state management

---

## Gameplay

- Use the **arrow keys** to move the player inside the maze
- Avoid walls and find the correct path
- Reach the exit to win the game
- The score decreases over time
- You can restart the game or change difficulty levels at any time
- You can let the algorithm solve the maze automatically

---

## Algorithms Used

### Depth First Search (DFS)

- Used to generate random mazes
- Used again to solve the maze
- Implemented using a stack and backtracking

DFS ensures that the maze is fully connected and that a valid path exists
between the start and the exit.

---

## OOP Concepts Applied

- **Encapsulation**
  - Player data, score, and timer are kept private and controlled by methods
- **Abstraction**
  - Maze generation and maze solving logic are separated into different classes
- **Inheritance**
  - Custom UI components extend `JPanel`
- **Polymorphism**
  - Event handling using listeners and interfaces
- **Interfaces**
  - Custom `GameOverListener` to handle game-over events
- **Separation of Concerns**
  - UI, game logic, and models are clearly separated

---

## Project Structure

```bash
Maze-Adventure/
├─ Main.java                # Application entry point
├─ MazePanel.java           # Core game logic and rendering
├─ MazeGenerator.java       # Maze generation using DFS
├─ MazeSolver.java          # Maze solving using DFS
├─ RightSidePanel.java      # Timer, score, and level display
├─ navPanel.java            # Top navigation bar
├─ GameState.java           # Enum for game states
├─ GameOverListener.java    # Custom event interface
├─ SoundManager.java        # Sound handling
├─ Sound.java               # Sound enum
├─ CustomMessage.java       # Custom dialogs
├─ AppColors.java           # Centralized colors
├─ model/
│   ├─ Player.java          # Player logic and animation
│   └─ Level.java           # Level configuration
├─ resources/
│   ├─ sounds/
│   └─ icons/
└─ README.md
