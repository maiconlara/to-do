<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id()
                ->comment('Unique identifier');
            $table->string('name')
                ->unique()
                ->comment('Task name');
            $table->string('description')
                ->comment('Task description');
            $table->enum('status', ['active', 'inactive'])
                ->default('active')
                ->comment('If the task still active or not');
            $table->dateTime('created_at')
                ->nullable()
                ->comment('Task creation date');
            $table->dateTime('updated_at')
                ->nullable()
                ->comment('Task last update date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
